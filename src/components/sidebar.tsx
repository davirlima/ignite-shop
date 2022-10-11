import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/future/image";
import { X } from "phosphor-react";
import { useCart } from "../hooks/useCart";
import {
  SidebarContainer,
  CloseButton,
  CardContainer,
  Card,
  OrderDetailsContainer,
  BuyButton,
} from "../styles/components/sidebar";

export const Sidebar = () => {
  const { productsOnCart, removeProductFromCart } = useCart();

  return (
    <Dialog.Portal>
      <SidebarContainer>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <div>
          <h1>Sacola de compras</h1>

          <CardContainer>
            {productsOnCart != undefined &&
              productsOnCart.map((product) => {
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
              <span>1 item</span>
            </div>

            <div>
              <strong>Valor total</strong>
              <strong>R$ 79,90</strong>
            </div>
          </OrderDetailsContainer>

          <BuyButton>Finalizar Compra</BuyButton>
        </div>
      </SidebarContainer>
    </Dialog.Portal>
  );
};
