import { createContext } from "react";
import { Product, StateProduct } from "../../models/product.model";

export type ProductContextProps = {
    stateProduct: StateProduct;
    changeCategory: (newCategory: string) => void;
    changeProducts: (newProducts: Product[]) => void;
    setProductFav: (productId: number, status: boolean) => void;
    fetchIsLoading: boolean;
}

export const ProductsContext = createContext<ProductContextProps>({} as ProductContextProps);
