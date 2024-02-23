import { useContext, useEffect, useState } from "react";
import { CardGrid } from "../../components/cards-components/CardGrid";
import { HeadBoardSelected } from "../../shared/headboard-components/HeadBoardSelected";
import { CategoryOption, Product } from "../../models/product.model";
import { ProductsContext } from "../../context/products/ProductsContext";
import { Spinner } from "flowbite-react";



export const Products = () => {
    
    const {stateProduct, fetchIsLoading} = useContext(ProductsContext)
    const[filtered, setFiltered] = useState<Product[]>()
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
        setFiltered(filtered)
        //changeProducts(filtered)
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
    }, [stateProduct.selectedCategory, products])

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
                            products={filtered || []}
                        />
                        
            }
        </>
    )
}


