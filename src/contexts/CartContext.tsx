import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

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

  useEffect(() => {
    const productsOnStorage = localStorage.getItem("product");
    if (productsOnStorage) {
      setProductOnCart(JSON.parse(productsOnStorage));
    }
  }, []);

  useEffect(() => {
    if (productsOnCart.length > 0) {
      localStorage.setItem("product", JSON.stringify(productsOnCart));
    }
  }, [productsOnCart]);

  const totalItemsOnCart = productsOnCart.length;

  function verifyIfProductAlreadyStayOnCart(productId: string) {
    const verificator = productsOnCart.findIndex(
      (product) => product.id === productId
    );
    return verificator != -1 ? true : false;
  }

  const addProductOnCart = useCallback(
    (product: Product) => {
      if (!verifyIfProductAlreadyStayOnCart(product.id)) {
        setProductOnCart((state) => [...state, product]);
      }
    },
    [verifyIfProductAlreadyStayOnCart]
  );

  const removeProductFromCart = useCallback(
    (product: Product) => {
      const position = productsOnCart.findIndex(
        (oldProduct) => oldProduct.id === product.id
      );
      const newCart = produce(productsOnCart, (draft) => {
        draft.splice(position, 1);
      });
      setProductOnCart(newCart);
      localStorage.setItem("product", JSON.stringify([]));
    },
    [productsOnCart]
  );

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
