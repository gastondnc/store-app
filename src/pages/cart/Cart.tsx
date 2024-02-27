import { useContext, useState } from "react";
import { HeadboardCart } from "../../shared/headboard-components/HeadboardCart";
import { CartContext } from "../../context/cart/CartContext";
import { Product } from "../../models/product.model";
import { CartItem } from "../../components/cart-component/CartItem";
import { CheckOut } from "../../components/checkout-component/CheckOut";
import { ProductsContext } from "../../context/products/ProductsContext";
import { getPriceWithDiscount } from "../../utils/helpers";

export const Cart = () => {
    const [ isCheckOut, setIsCheckOut ] = useState<boolean>(false);
    const { stateCart, removeProduct, addProduct } = useContext(CartContext);
    const { stateProduct, getPromoCategories } = useContext(ProductsContext);
    const [ totalShipping, setTotalShipping ] = useState<number>(0);
    const cart: Product[] = stateCart.cart;
    const { promo } = stateProduct;
    const promoCategories: string[] = getPromoCategories();
    const getTotalPrice = (): number => {
        let totalPrice = 0;
        cart.forEach((product: Product) => {
            const price: string = isProductPromo(product) ? getPriceWithDiscount(product.price, promo?.discount) : product.price.toFixed(2)  // Hacemos la comparación de isProductPromo, lo comparamos con al función generiaca que generamos para sacar el poncentage y lo comparamos con el product.price //
            totalPrice = totalPrice + (Number(price) * product.quantity!)
        })
        totalPrice = totalPrice + totalShipping
        return Number(totalPrice.toFixed(2));
    }

    const isProductPromo = (product: Product): boolean => {
        return promoCategories.includes(product.category)
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

    const handleBuy = () => {
        setIsCheckOut(!isCheckOut)
    }

    return (
        <>
            <HeadboardCart
                title={'Products in the cart'}
                description={'Here you have all the products added to your cart'}
                totalTitle={'Total: €'}
                totalPrice={getTotalPrice()}
                noItems={'You have no items in your shopping cart'}
                handleBuy={handleBuy}
            />

            {
                isCheckOut
                ? <CheckOut 
                    setTotalShipping = {setTotalShipping}
                />
                    : <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-1 my-2">

                        {mappedCartItem()}
                    </div>
            }

        </>
    )
}



















