import React from 'react'
import CartTotal from '../components/CartTotal';
import Navbar from '../components/Navbar'
import {Main, Items, Ad, ItemProducts} from '../styles/ShoppingCartStyle'
import {useCart} from '../features/cartContext'
import CartProducts from '../components/CartProducts';

function ShoppingCart() {
    const {cart} = useCart()
    // const show = false;

    return (
        <>
            <Navbar />
            <Main>
                <Items>
                    <Ad>
                        <img className="ad__img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg" alt="Ad"/>
                    </Ad>
                    <ItemProducts>
                        {cart?.cart.length <= 0 ? (<h3 className="items__title">your amazon cart is empty</h3>) : (<CartProducts cart={cart?.cart} title={'Shopping Cart'} showDeleteBtn={true}/>)}
                    </ItemProducts>
                </Items>
                {
                    cart?.cart.length > 0 && (<CartTotal />)
                }
            </Main>
        </>
    )
}

export default ShoppingCart
