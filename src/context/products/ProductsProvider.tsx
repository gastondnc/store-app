import { useEffect, useReducer } from "react";
import { Product, StateProduct } from '../../models/product.model';
import { ProductsContext } from "./ProductsContext";
import { productsReducer } from "./productsReducer";
import { URL_PRODUCTS } from "../../utils/endpoints";
import { useFetch } from "../../hooks/useFetch";
import { usePromo } from "../../hooks/usePromo";


const INITIAL_STATE: StateProduct = {
    products: [],
    favs: [],
    selectedCategory: '',
    promo: null
}

type Props = {
    children: JSX.Element | JSX.Element[];
}

export const ProductsProvider = ({ children }: Props) => {
    const { fetchResponse, fetchIsLoading } = useFetch<Product>(URL_PRODUCTS);
    const [stateProduct, dispatch] = useReducer(productsReducer, INITIAL_STATE);
    const { promo, getPromoCategories } = usePromo();

    const changeCategory = (newCategory: string) => {
        dispatch({ type: 'category', payload: newCategory })
    }

    const changeProducts = (newProducts: Product[]) => {
        dispatch({ type: 'products', payload: newProducts })
    }

    const setProductFav = (productId: number, status: boolean) => {
        const newProducts = stateProduct.products.map((product: Product) => {
            if (product.id === productId) {
                product.isFav = status
            }
            return product
        })
        dispatch({ type: 'products', payload: newProducts })

        let newFavs: number[] = [...stateProduct.favs]
        if (status === true) {
            newFavs.push(productId)
        } else {
            newFavs = newFavs.filter(productFav => {
                return productFav != productId
            })
        }
        localStorage.setItem('favs', JSON.stringify(newFavs))
        dispatch({ type: 'favs', payload: newFavs })
    }

    const getFavs = (): number[] => {
        return  JSON.parse(localStorage.getItem('favs') || '[]') 
    } 

    useEffect( () => {
        dispatch({type: 'promo', payload: promo})

    }, [promo])


    useEffect(() => {
        const favsId: number[] = getFavs()
        const mappedProducts: Product[] = fetchResponse.map( (product: Product) => {
            // const isExist: boolean = favsId.some(id  => id === product.id)
            const isExist: boolean = favsId.includes(product.id)

            if( isExist ){
                product.isFav = true
            }
            return product
        } )
        dispatch({ type: 'favs', payload: favsId })
        dispatch({ type: 'products', payload: mappedProducts })
    }, [fetchResponse])

    return (
        <ProductsContext.Provider value={{ stateProduct, changeCategory, changeProducts, setProductFav, fetchIsLoading, getPromoCategories }}>
            {children}
        </ProductsContext.Provider>
    )
}

