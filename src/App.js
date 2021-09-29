import './App.css';
import {GlobalStyle} from './styles/GlobalStyle';
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<GlobalStyle />
				<Switch>
					<Route exact component={Home} path='/'/>
					<Route exact component={ShoppingCart} path='/cart'/>
				</Switch>
			</div>
			
		</Router>
		
	);
}

export default App;
