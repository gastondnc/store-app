import { useEffect, useReducer } from 'react';
import { StateCart } from '../../models/cart.model';
import { Product } from '../../models/product.model';
import { cartReducer } from './cartReducer';
import { CartContext } from './CartContext';

const INITIAL_STATE: StateCart = {
    cart: [],
}

type Props = {
    children: JSX.Element | JSX.Element[];
}

export const CartProvider = ({children}: Props) => {
    const[ stateCart, dispatch ] = useReducer(cartReducer, INITIAL_STATE);

    const addProduct = (newProduct: Product) => {
        
        const newCart = [...stateCart.cart]
        const prod = newCart.find(product => product.id === newProduct.id)
        prod ? prod.quantity!+=1 : newCart.push({...newProduct, quantity: 1})

        dispatch({type: 'update', payload: newCart })
    }

    const removeProduct = (productId: number, deleteAll?: boolean) => {
        let newCart = [...stateCart.cart]
        const prod = newCart.find(product => product.id === productId)
        deleteAll
        ? newCart = newCart.filter( product => {
            return product.id !== productId
        })
        : prod!.quantity! -= 1

        
        dispatch({type: 'update', payload: newCart})
    }

    useEffect(() => {
        const newCart = JSON.parse(localStorage.getItem('cart') || '[]')
        dispatch({type: 'update', payload: newCart })
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(stateCart.cart))
    }, [stateCart])

    return (
        <CartContext.Provider value={{stateCart, addProduct, removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}

