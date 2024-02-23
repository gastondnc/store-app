
import { useContext } from "react";
import { Product } from "../../models/product.model";
import { ProductsContext } from "../../context/products/ProductsContext";
import { getPriceWithDiscount } from "../../utils/helpers";

type Props = {
    product: Product;
    removeProduct: (productId: number, deleteAll?: boolean) => void;
    addProduct: (newProduct: Product) => void;
}

export const CartItem = ({ product, removeProduct, addProduct }: Props) => {
    const { title, description, price, image, id, quantity } = product;
    const { stateProduct, getPromoCategories } = useContext(ProductsContext);
    const { promo } = stateProduct;

    const isPromo = (): boolean => {
        // return getPromoCategories().includes(product.category)
        return getPromoCategories().some(cat => cat === product.category)
    }

    return (
        <>
            <div className="flex flex-col justify-between rounded-md shadow-lg md:flex-row md:w-xl dark:bg-gray-800 p-6 my-4">
                <div className="flex flex-row gap-4 p-4 leading-normal">
                    <img src={image} className="w-20" alt="img-product" />
                    <div className="flex flex-col">
                        <h6 className=" max-w-lg mb-2 text-2xl font-medium truncate text-gray-900 dark:text-white">{title}</h6>
                        <p className="max-w-md mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">{description}</p>
                        {
                            isPromo()
                                ? (
                                    <div>
                                        <p className="text-white font-bold line-through">Price: {price}</p>
                                        <p className="text-white font-bold">Discount: {promo?.discount}%</p>
                                        <p className="text-white font-bold">Actual Price: {getPriceWithDiscount(product.price, promo?.discount)}</p>
                                    </div>
                                )
                                : <p className="text-white font-bold">Price: {price}</p>
                        }
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button disabled={quantity === 1} onClick={() => removeProduct(id)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        -
                    </button>
                    <p className="text-white font-bold mb-2">{product.quantity}</p>
                    <button onClick={() => addProduct(product)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        +
                    </button>
                    <div>
                        <button onClick={() => removeProduct(id, true)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}






