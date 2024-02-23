import { Product, StateProduct } from "../../models/product.model";
import { Promo } from "../../models/promo.model";

type ProductsAction = {
    type: 'category' | 'products' | 'favs' | 'promo'; // Action //
    payload: string | Product[] | number[] | Promo | null;  // Value //
}

export const productsReducer = (state: StateProduct, action: ProductsAction): StateProduct => {
    switch (action.type) {
        case 'category':
            
            return{
                ...state,
                selectedCategory: action.payload as string
            }
        
        case 'products':
            return{
                ...state,
                products: action.payload as Product[]
            }
        case 'favs':
            return{
                ...state,
                favs: action.payload as number[]
            }

            case 'promo':
                return {
                    ...state,
                    promo: action.payload as Promo | null
                }


            default:
                return state;
        }
    
}


