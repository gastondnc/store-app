import { useReducer } from "react";
import { Product, StateProduct } from "../../models/product.model";
import { ProductsContext } from "./ProductsContext";
import { productsReducer } from "./productsReducer";

const INITIAL_STATE: StateProduct = {
    products: [],
    selectedCategory: ''
}

type Props = {
    children: JSX.Element | JSX.Element[];
}

export const ProductsProvider = ({ children }: Props) => {
    const [ stateProduct, dispatch ] = useReducer(productsReducer, INITIAL_STATE);

    const changeCategory = (newCategory: string) => {
        dispatch({type: 'category', payload: newCategory} )
    }

    const changeProducts = (newProducts: Product[]) => {
        dispatch( { type: 'products', payload: newProducts } )
    }

    return (
        <ProductsContext.Provider value={{stateProduct, changeCategory, changeProducts}}>
            { children }
        </ProductsContext.Provider>
    )
}

