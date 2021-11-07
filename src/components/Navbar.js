import React from 'react';
import {
	Fig,
	Form,
	Nav,
	Option,
	UserOptions,
	ItemsBasket,
} from '../styles/NavbarStyle';
import LogoImg from '../images/amazon-logo-white.png';
import { ShoppingBasket, Search } from '@material-ui/icons';
import {Link} from 'react-router-dom'
import {useCart} from '../features/cartContext'
import { signOut } from "firebase/auth";
import {auth} from '../firebase'
import ConditionalLink from '../routes/ConditionalLink'


function Navbar() {
	const {cart} = useCart()
	
	const logOut = () => cart?.user && signOut(auth)

	return (
		<Nav>
			<Link to='/'>
				<Fig>
					<img src={`${LogoImg}`} alt='amazon logo' className='nav__logo' />
				</Fig>
			</Link>
			<Form>
				<input type='text' className='nav__search' />
				<button type='submit' className='nav__search--icon'>
					<Search className='nav__search--icon-search' />
				</button>
			</Form>
			<UserOptions>
				<ConditionalLink to='/login' condition={!cart?.user} className='user__cart'>
					<Option onClick={logOut}>
						<span className='user__msg'>{`hello, ${cart?.user ? cart?.user.displayName : 'Amazony'}`}</span>
						<h4 className='user__account'>{cart?.user ? `log out` : `log in`}</h4>
					</Option>
				</ConditionalLink>
				<Link to='/orders' className='user__cart'>
					<Option>
						<span className='order__note'>returns </span>
						<h4 className='user__orders'>&amp; orders</h4>
					</Option>
				</Link>
				{/* <Option></Option> */}
				<Link to='/cart' className='user__cart'>
					<ItemsBasket>
						<ShoppingBasket className='basket__icon' />
						<span className='basket__count'>{cart?.cart.length}</span>
					</ItemsBasket>
				</Link>
			</UserOptions>
		</Nav>
	);
}

export default Navbar;
