import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import Image from "next/future/image";
import { Handbag } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { CartProvider } from "use-shopping-cart";
import { Sidebar } from "../components/sidebar";

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

      <CartProvider
        cartMode="checkout-session"
        stripe={process.env.STRIPE_SECRET_KEY}
        currency="BRL"
      >
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  );
}
