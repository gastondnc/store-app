import { StateCart } from "../../models/cart.model";
import { Product } from "../../models/product.model"

type CartActions = {
    type: 'update'; 
    payload: Product[];
}



export const cartReducer = (state: StateCart, action: CartActions): StateCart => {

    switch (action.type) {
        case 'update':
            return {
                ...state,
                cart: action.payload
            }
                
            default:
                return state
        }
    }
