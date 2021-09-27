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

function Navbar() {
	return (
		<Nav>
			<Fig>
				<img src={`${LogoImg}`} alt='amazon logo' className='nav__logo' />
			</Fig>
			<Form>
				<input type='text' className='nav__search' />
				<button type='submit' className='nav__search--icon'>
					<Search className='nav__search--icon-search' />
				</button>
			</Form>
			<UserOptions>
				<Option>
					<span className='user__msg'>hello, user</span>
					<h4 className='user__account'>sign in</h4>
				</Option>
				<Option>
					<span className='order__note'>returns </span>
					<h4 className='user__orders'>&amp; orders</h4>
				</Option>
				{/* <Option></Option> */}
				<ItemsBasket>
					<ShoppingBasket className='basket__icon' />
					<span className='basket__count'>0</span>
				</ItemsBasket>
			</UserOptions>
		</Nav>
	);
}

export default Navbar;
