import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import Image from "next/future/image";
import { Handbag } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Sidebar } from "../components/sidebar";
import { CartContextProvider } from "../contexts/CartContext";

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

          <Sidebar />
        </Dialog.Root>
      </Header>

      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  );
}
