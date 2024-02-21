import { Product, StateProduct } from "../../models/product.model";

type ProductsAction = {
    type: 'category' | 'products' | 'favs'; // Action //
    payload: string | Product[] | number[];  // Value //
}

export const productsReducer = (state: StateProduct, action: ProductsAction): StateProduct => {
    console.log(action)
    switch (action.type) {
        case 'category':
            console.log(action.payload)
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

            default:
                return state;
        }
    
}


