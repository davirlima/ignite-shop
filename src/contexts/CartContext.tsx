import { createContext, ReactNode, useState } from "react";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
}

interface CartContextProps {
  productsOnCart: Product[];
  addProductOnCart: (product: Product) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [productsOnCart, setProductOnCart] = useState<Product[]>([]);

  function addProductOnCart(product: Product) {
    const verificator = productsOnCart.findIndex(
      (product) => product.id === product.id
    );

    if (verificator != -1) {
      setProductOnCart((state) => [...state, product]);
    }
  }

  return (
    <CartContext.Provider value={{ productsOnCart, addProductOnCart }}>
      {children}
    </CartContext.Provider>
  );
}
