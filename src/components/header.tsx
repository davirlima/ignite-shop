import Image from "next/future/image";
import * as Dialog from "@radix-ui/react-dialog";
import logoImg from "../assets/logo.svg";
import { Sidebar } from "./sidebar";
import { Handbag } from "phosphor-react";
import { HeaderContainer } from "../styles/components/header";
import { useCart } from "../hooks/useCart";

export default function Header() {
  const { totalItemsOnCart } = useCart();

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />

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
