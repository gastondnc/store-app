import { useContext } from "react";
import { HeadboardCart } from "../../components/HeadboardCart";
import { CartContext } from "../../context/cart/CartContext";
import { Product } from "../../models/product.model";
import { CartItem } from "../../components/CartItem";


export const Cart = () => {
    const { stateCart, removeProduct, addProduct } = useContext(CartContext);
    const cart: Product[] = stateCart.cart
    const getTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach((product: Product) => {
            totalPrice = totalPrice + (product.price * product.quantity!)
        })
        return totalPrice.toFixed(2); 
    }

    return (
        <>
            <HeadboardCart
                title={'Products in the cart'}
                description={'Here you have all the products added to your cart'}
            />
            {
                cart.map(product => {
                    return (
                        <CartItem
                            key={product.id}
                            product={product}
                            removeProduct={removeProduct}
                            addProduct={addProduct}
                        />

                    )
                })
            }

            <div className="bg-gray-800 p-4 rounded-md shadow-lg md:max-w-96 my-4">
                <h3 className="text-gray-200 font-bold text-2xl">Total: €{getTotalPrice()}</h3>
            </div>

        </>
    )
}








