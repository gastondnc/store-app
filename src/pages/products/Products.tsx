import { useContext, useEffect } from "react";
import { CardGrid } from "../../components/CardGrid";
import { HeadBoardSelected } from "../../components/HeadBoardSelected";
import { Spinner } from "../../components/Spinner";
import { useFetch } from "../../hooks/useFetch";
import { CategoryOption, Product } from "../../models/product.model";
import { URL_PRODUCTS } from "../../utils/endpoints";
import { ProductsContext } from "../../context/products/ProductsContext";



export const Products = () => {
    const { fetchResponse, fetchIsLoading } = useFetch<Product>(URL_PRODUCTS);
    const {changeProducts, stateProduct} = useContext(ProductsContext)
    console.log('STATE-PRODUCTS',stateProduct)

    const filterProducts = (selectedCategory: string) => {
        let filtered: Product[] = []
        if (selectedCategory === '') {
            filtered = [...fetchResponse]
        } else {
            filtered = fetchResponse.filter((product: Product) => {
                return product.category === selectedCategory
            })
        }
        changeProducts(filtered)
    }

    const buildCategories = (): CategoryOption[] => {
        if (fetchResponse) {
            const all = { value: '', label: 'all products' }
            const categories: CategoryOption[] = [all];
            fetchResponse.forEach((product: Product) => {
                const objOptions = {
                    value: product.category,
                    label: product.category
                }
                if (!categories.find(category => category.value === objOptions.value)) {
                    categories.push(objOptions)
                }
            })
            return categories
        } else {
            return []
        }
    }

    useEffect(() => {
        changeProducts(fetchResponse)
    }, [fetchResponse])

    useEffect(() => {
        if(stateProduct) {
            filterProducts(stateProduct.selectedCategory)
        }
    }, [stateProduct.selectedCategory])

    return (
        <>
            <HeadBoardSelected
                title={'Select your product'}
                description={'Select your product by category'}
                categories={buildCategories()}
            />

            {
                fetchIsLoading && !fetchResponse
                    ? <Spinner />
                    : <CardGrid
                        products={stateProduct.products || []}
                        />
            }
        </>
    )
}


