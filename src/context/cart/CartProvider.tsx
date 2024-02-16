import { StateCart } from '../../models/cart.model';


const INITIAL_STATE: StateCart = {
    addProducts: [],
    
}

type Props = {
    children: JSX.Element | JSX.Element[];
}

export const CartProvider = ({children}: Props) => {
    return (
        <CartProvider value={{}}>
            {children}
        </CartProvider>
    )
}