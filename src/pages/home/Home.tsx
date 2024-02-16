import { Headboard } from "../../components/Headboard";
import { CardGrid } from "../../components/CardGrid";
import { Spinner } from "../../components/Spinner";
import { useFetch } from "../../hooks/useFetch";
import { URL_PRODUCTS } from "../../utils/endpoints";
import { Product } from "../../models/product.model";


export const Home = () => {
    const { fetchResponse, fetchIsLoading } = useFetch<Product>(URL_PRODUCTS);
    console.log('HOME',fetchResponse)
    return (
        <>
            <Headboard
                title={'Hot Sale'}
                description={'Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.'}
            />

            {
                fetchIsLoading && !fetchResponse
                    ? <Spinner />
                    : <CardGrid
                        products={fetchResponse || []}
                    />
            }

        </>
    )
}





