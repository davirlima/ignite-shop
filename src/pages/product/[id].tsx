import Image from "next/future/image";
import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

import camiseta from "../../assets/camisetas/1.png";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={camiseta} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          animi officiis amet qui veniam impedit recusandae culpa error esse
          consequatur est repellat tempora porro voluptates reiciendis officia
          in, fugiat voluptatum.
        </p>

        <button>Compre agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
