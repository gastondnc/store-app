import { useContext, useEffect } from "react";
import { CardGrid } from "../../components/cards-components/CardGrid";
import { HeadBoardSelected } from "../../shared/headboard-components/HeadBoardSelected";
import { CategoryOption, Product } from "../../models/product.model";
import { ProductsContext } from "../../context/products/ProductsContext";
import { Spinner } from "flowbite-react";



export const Products = () => {
    
    const {changeProducts, stateProduct, fetchIsLoading} = useContext(ProductsContext)
    console.log('STATE-PRODUCTS',stateProduct)
    const products: Product[] = stateProduct.products

    const filterProducts = (selectedCategory: string) => {
        let filtered: Product[] = []
        if (selectedCategory === '') {
            filtered = [...products]
        } else {
            filtered = products.filter((product: Product) => {
                return product.category === selectedCategory
            })
        }
        changeProducts(filtered)
    }

    const buildCategories = (): CategoryOption[] => {
        if (products) {
            const all = { value: '', label: 'all products' }
            const categories: CategoryOption[] = [all];
            products.forEach((product: Product) => {
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
                        fetchIsLoading
                        ? <Spinner/>
                        :<CardGrid
                            products={products || []}
                        />
                        
            }
        </>
    )
}


