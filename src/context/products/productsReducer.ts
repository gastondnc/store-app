import { Product, StateProduct } from "../../models/product.model";

type ProductsAction = {
    type: 'category' | 'products'; // Action //
    payload: string | Product[];  // Value //
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

            default:
                return state;
        }
    
}


