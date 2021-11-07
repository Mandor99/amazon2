//initState
export const cartState = {
    cart: [],
    user: null,
}

export const getTotal = (cart) => {
    return cart.reduce((sum, product) => sum + Number(product.price), 0)
}

const cartReducer = (state = cartState, {type, product, id, user}) => {

    switch (type) {
        case 'add_product':
            return {
                ...state,
                cart: [...state.cart, product]
            }

        case 'delete_product': 
            const newCart = state.cart.filter((product) => product.id !== id)
            return {
                ...state,
                cart: newCart
            }

        case 'empty_cart':
            return {
                ...state,
                cart: []
            }

        case 'set_user': 
            return {
                ...state,
                user: user,
            }

        case 'log_out': 
        return {
            ...state,
            user: null,
        }
            
        default:
            return state;
    }
}

export default cartReducer