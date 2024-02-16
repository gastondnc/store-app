import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { ProductsProvider } from "../../context/products/ProductsProvider";



const Layout = () => {
    return (

        <>
            <Header />
                <ProductsProvider>
                    <div className="p-4 mx-auto">
                        <Outlet />
                    </div>
                </ProductsProvider>
            <Footer />
        </>
    )
}

export default Layout
