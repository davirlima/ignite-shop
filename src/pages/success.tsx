import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";

import Stripe from "stripe";
import { stripe } from "../lib/stripe";

import { SuccessContainer, ImageContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Ignite Shop | Compra efetuada</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <div>
          {products.map((product) => {
            return (
              <ImageContainer key={product.name}>
                <Image
                  src={product.imageUrl}
                  alt=""
                  width={130.18}
                  height={142.69}
                />
              </ImageContainer>
            );
          })}
        </div>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>,{" "}
          {products.length == 1 ? (
            <>
              sua <strong>{products[0].name}</strong> já está a caminho da sua
              casa
            </>
          ) : (
            <>
              suas <strong>{products.length} camisetas</strong> já estão a
              caminho da sua casa.
            </>
          )}
        </p>

        <Link href={"/"}>
          <a>Voltar ao catálogo</a>
        </Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  if (sessionId === "undefined") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  console.log(session);

  const customerName = session.customer_details.name;

  const products = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product;
    return {
      name: product.name,
      imageUrl: product.images[0],
    };
  });

  return {
    props: {
      customerName,
      products: products,
    },
  };
};
