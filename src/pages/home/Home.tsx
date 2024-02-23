import { useContext } from "react";
import { Headboard } from "../../shared/headboard-components/Headboard";
import { CardGrid } from "../../components/cards-components/CardGrid";
import { Spinner } from "../../shared/Spinner";
import { ProductsContext } from "../../context/products/ProductsContext";


export const Home = () => {
    const{ stateProduct, fetchIsLoading } = useContext(ProductsContext)

    return (
        <>
            <Headboard
                title={'Hot Sale'}
                description={'Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.'}
            />

            {
                    fetchIsLoading
                    ? <Spinner />
                    : <CardGrid
                        products={stateProduct.products || []}
                    />
            }

        </>
    )
}





