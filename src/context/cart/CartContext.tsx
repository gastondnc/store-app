import { createContext } from "react";
import { StateCart } from "../../models/cart.model";
import { Product } from "../../models/product.model";

export type CartContextProps = {
    stateCart: StateCart;
    addProduct: (newProduct: Product) => void; 
    removeProduct: (productId: number) => void;
}


export const CartContext =  createContext<CartContextProps>({} as CartContextProps);
