import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import Image from "next/future/image";
import { Handbag, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  SidebarContainer,
  CloseButton,
  CardContainer,
  Card,
  OrderDetailsContainer,
  BuyButton,
} from "../styles/components/sidebar";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <Handbag size={24} color="#8d8d99" weight="bold" />
            </button>
          </Dialog.Trigger>

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
        </Dialog.Root>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
