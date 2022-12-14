import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/future/image";

import Stripe from "stripe";
import { stripe } from "../lib/stripe";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { useCart } from "../hooks/useCart";

import { HomeContainer, Product } from "../styles/pages/home";

import { Handbag } from "phosphor-react";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    defaultPriceId: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.8,
      spacing: 48,
    },
    breakpoints: {
      "(max-width: 640px)": {
        slides: {
          perView: 1.05,
          spacing: 16,
        },
      },
    },
  });

  const { addProductOnCart } = useCart();

  return (
    <>
      <Head>
        <title>Ignite Shop | Home</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      addProductOnCart(product);
                    }}
                  >
                    <Handbag size={32} weight="bold" />
                  </button>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
