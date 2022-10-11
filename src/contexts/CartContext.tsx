import { createContext, ReactNode, useState } from "react";

import { produce } from "immer";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  defaultPriceId: string;
  description?: string;
}

interface CartContextProps {
  productsOnCart: Product[];
  totalItemsOnCart: number;
  addProductOnCart: (product: Product) => void;
  removeProductFromCart: (product: Product) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [productsOnCart, setProductOnCart] = useState<Product[]>([]);

  const totalItemsOnCart = productsOnCart.length;

  function verifyIfProductAlreadyStayOnCart(productId: string) {
    const verificator = productsOnCart.findIndex(
      (product) => product.id === productId
    );
    return verificator != -1 ? true : false;
  }

  function addProductOnCart(product: Product) {
    if (!verifyIfProductAlreadyStayOnCart(product.id)) {
      setProductOnCart((state) => [...state, product]);
    }
  }

  function removeProductFromCart(product: Product) {
    const position = productsOnCart.findIndex(
      (oldProduct) => oldProduct.id === product.id
    );
    const newCart = produce(productsOnCart, (draft) => {
      draft.splice(position, 1);
    });
    setProductOnCart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        productsOnCart,
        addProductOnCart,
        totalItemsOnCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
