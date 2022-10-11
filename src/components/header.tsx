import Image from "next/future/image";
import Link from "next/link";

import { useCart } from "../hooks/useCart";

import Sidebar from "./sidebar";

import * as Dialog from "@radix-ui/react-dialog";

import { HeaderContainer } from "../styles/components/header";

import { Handbag } from "phosphor-react";

import logoImg from "../assets/logo.svg";

export default function Header() {
  const { totalItemsOnCart } = useCart();

  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <Image src={logoImg} alt="" />
        </a>
      </Link>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>
            {totalItemsOnCart > 0 ? (
              <>
                <span>{totalItemsOnCart}</span>
                <Handbag size={24} color="#c4c4cc" weight="bold" />
              </>
            ) : (
              <Handbag size={24} color="#8d8d99" weight="bold" />
            )}
          </button>
        </Dialog.Trigger>

        <Sidebar />
      </Dialog.Root>
    </HeaderContainer>
  );
}
