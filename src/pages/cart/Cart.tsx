import { useContext } from "react";
import { HeadboardCart } from "../../shared/headboard-components/HeadboardCart";
import { CartContext } from "../../context/cart/CartContext";
import { Product } from "../../models/product.model";
import { CartItem } from "../../components/cart-component/CartItem";
import { CheckOut } from "../../components/checkout-component/CheckOut";
import { ProductsContext } from "../../context/products/ProductsContext";


export const Cart = () => {
    const { stateCart, removeProduct, addProduct } = useContext(CartContext);
    const { stateProduct } = useContext(ProductsContext);
    const cart: Product[] = stateCart.cart;
    const { promo } = stateProduct;
    promo?.discount
    const getTotalPrice = (): number => {
        let totalPrice = 0;
        cart.forEach((product: Product) => {
            totalPrice = totalPrice + (product.price * product.quantity!)
        })
        return Number(totalPrice.toFixed(2));
    }
    
    const mappedCartItem = () => {
        return cart.map(product => {
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


    return (
        <>
            <HeadboardCart
                title={'Products in the cart'}
                description={'Here you have all the products added to your cart'}
                totalTitle={'Total: €'}
                totalPrice={getTotalPrice()}
                noItems={'You have no items in your shopping cart'}
            />
            <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-1 my-2">
                
                {mappedCartItem()}

                <CheckOut/>
                
            </div>
        </>
    )
}
    











