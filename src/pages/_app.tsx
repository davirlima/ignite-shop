import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import Image from "next/future/image";
import { Handbag } from "phosphor-react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <button>
          <Handbag size={24} color="#8d8d99" weight="bold" />
        </button>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
