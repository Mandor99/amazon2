import {useEffect} from 'react'
import './App.css';
import {GlobalStyle} from './styles/GlobalStyle';
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase'
import {useCart} from './features/cartContext'
import Payment from './pages/Payment';
import Orders from './pages/Orders'
import ProtectedRoute from './routes/ProtectedRoute'


function App() {

	const {cart, dispatch} = useCart()
	useEffect(() => {
		const UnSubscribe = onAuthStateChanged(auth, (user) => {
			user ? dispatch({type: 'set_user', user : user}) : dispatch({type: 'log_out'})
		})
		return () => {
			UnSubscribe()
		}
	}, [cart.user, dispatch])
	
	return (
		<Router>
			<div className='App'>
				<GlobalStyle />
				<Switch>
					<Route exact component={Home} path='/'/>
					<Route exact component={ShoppingCart} path='/cart'/>
					<Route component={LogIn} path='/login'/>
					<Route component={SignUp} path='/signup'/>
					<ProtectedRoute component={Orders} path='/orders' />
					<ProtectedRoute component={Payment} path='/payment'/>
				</Switch>
			</div>
			
		</Router>
		
	);
}

export default App;
