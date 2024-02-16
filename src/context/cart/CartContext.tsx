import { createContext } from "react";
import { StateCart } from "../../models/cart.model";

export type CartContextProps = {
    stateCart: StateCart;
}


export const CartContext =  createContext<CartContextProps>({} as CartContextProps);
