import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/future/image";
import { X } from "phosphor-react";
import {
  SidebarContainer,
  CloseButton,
  CardContainer,
  Card,
  OrderDetailsContainer,
  BuyButton,
} from "../../styles/components/sidebar";

export const Sidebar = () => {
  return (
    <Dialog.Portal>
      <SidebarContainer>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <div>
          <h1>Sacola de compras</h1>

          <CardContainer>
            <Card>
              <div className="img-container">
                <Image src={""} width={94.79} height={94.79} alt="" />
              </div>

              <div className="text-container">
                <div>
                  <h1>Camiseta Beyond the Limits</h1>
                  <strong>R$ 79,90</strong>
                </div>
                <button>Remover</button>
              </div>
            </Card>

            <Card>
              <div className="img-container">
                <Image src={""} width={94.79} height={94.79} alt="" />
              </div>

              <div className="text-container">
                <div>
                  <h1>Camiseta Beyond the Limits</h1>
                  <strong>R$ 79,90</strong>
                </div>
                <button>Remover</button>
              </div>
            </Card>
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
