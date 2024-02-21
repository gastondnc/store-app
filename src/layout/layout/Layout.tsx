import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { ProductsProvider } from "../../context/products/ProductsProvider";
import { CartProvider } from "../../context/cart/CartProvider";



const Layout = () => {
    return (

        <>
            <CartProvider>
                <ProductsProvider>
                    <Header />
                    <div className="p-4 mx-auto">
                        <Outlet />
                    </div>
                </ProductsProvider>
            </CartProvider>
            <Footer />
        </>
    )
}

export default Layout
