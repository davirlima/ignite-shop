import { useState } from "react";

import Image from "next/future/image";

import { useCart } from "../hooks/useCart";

import axios from "axios";

import * as Dialog from "@radix-ui/react-dialog";

import {
  SidebarContainer,
  CloseButton,
  CardContainer,
  Card,
  OrderDetailsContainer,
  BuyButton,
} from "../styles/components/sidebar";

import { X } from "phosphor-react";

export default function Sidebar() {
  const { productsOnCart, removeProductFromCart, totalItemsOnCart } = useCart();

  function calculateTotalPrice() {
    const pricesInNumberFormat = productsOnCart.map((product) => {
      const priceInArray = product.price.split("");
      const priceInString = priceInArray
        .splice(3, priceInArray.length)
        .join("")
        .replace(",", ".");
      return parseFloat(priceInString);
    });

    const sum = pricesInNumberFormat.reduce((acc, price) => {
      acc += price;
      return acc;
    }, 0);

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(sum);
  }

  const [isCratingCheckoutSession, setIsCratingCheckoutSession] =
    useState(false);

  async function handleBuyCart() {
    try {
      setIsCratingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        pricesId: productsOnCart.map((product) => product.defaultPriceId),
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCratingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout");
    }
  }

  return (
    <Dialog.Portal>
      <SidebarContainer>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <div>
          <h1 className="title">Sacola de compras</h1>

          <CardContainer>
            {productsOnCart.map((product) => {
              return (
                <Card key={product.id}>
                  <div className="img-container">
                    <Image
                      src={product.imageUrl}
                      width={94.79}
                      height={94.79}
                      alt=""
                    />
                  </div>

                  <div className="text-container">
                    <div>
                      <h1>{product.name}</h1>
                      <strong>{product.price}</strong>
                    </div>
                    <button onClick={() => removeProductFromCart(product)}>
                      Remover
                    </button>
                  </div>
                </Card>
              );
            })}
          </CardContainer>
        </div>

        <div>
          <OrderDetailsContainer>
            <div>
              <span>Quantidade</span>
              <span>
                {totalItemsOnCart == 1 ? `1 item` : `${totalItemsOnCart} itens`}
              </span>
            </div>

            <div>
              <strong>Valor total</strong>
              <strong>{calculateTotalPrice()}</strong>
            </div>
          </OrderDetailsContainer>

          <BuyButton
            onClick={handleBuyCart}
            disabled={isCratingCheckoutSession}
          >
            Finalizar Compra
          </BuyButton>
        </div>
      </SidebarContainer>
    </Dialog.Portal>
  );
}
