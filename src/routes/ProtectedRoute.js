import {Route, Redirect} from 'react-router-dom'
import {useCart} from '../features/cartContext'

const ProtectedRoute = ({component: Component, ...rest}) => {
    const {cart} = useCart()

    return (
        <Route {...rest} render={(props) => cart.user === null ? (<Redirect to='/login'/>) : (<Component {...props}/>)} />
    )
}
export default ProtectedRoute