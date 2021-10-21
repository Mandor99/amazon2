import {createContext, useContext, useReducer, useMemo} from 'react'
import cartReducer, {cartState} from './cartReducer'

export const cartContext = createContext({})

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, cartState)
    const values = useMemo(() => {return {cart, dispatch}}, [cart, dispatch])
    return (
        <cartContext.Provider value={values}>{children}</cartContext.Provider>
    )
}

export const useCart = () => useContext(cartContext)