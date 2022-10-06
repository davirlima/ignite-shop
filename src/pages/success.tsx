import Image from "next/future/image";
import Link from "next/link";
import { SuccessContainer, ImageContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>
        <Image src="" alt="" width={130} height={145} />
      </ImageContainer>

      <p>
        Uhuul <strong>Davi Lima</strong>, sua <strong>Camiseta X</strong> já
        está a caminho da sua casa.
      </p>

      <Link href={"/"}>
        <a>Voltar ao catálogo</a>
      </Link>
    </SuccessContainer>
  );
}
