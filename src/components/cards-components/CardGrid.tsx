import { Product } from "../../models/product.model"
import { Card } from "./Card"

type Props = {
    products: Product[]
}

export const CardGrid = ({ products }: Props) => {
    return (
        <>
            <div className="grid grid-cols-1 place-content-center gap-4 sm:grid-cols-1 md:grid-cols-4 px-4 my-10">
                {
                    products.map((product: Product) => {
                        return (
                            <Card
                                key={product.id}
                                
                                product={product}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
