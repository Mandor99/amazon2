import React from 'react'
import CartTotal from '../components/CartTotal';
import Navbar from '../components/Navbar'
import {Main, Items, Ad, ItemProducts} from '../styles/ShoppingCartStyle'

function ShoppingCart() {
    const show = false;
    return (
        <>
            <Navbar />
            <Main>
                <Items>
                    <Ad>
                        <img className="ad__img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg" alt="Ad"/>
                    </Ad>
                    <ItemProducts>
                        {!show ? (<h3 className="items__title">your amazon cart is empty</h3>) : (<h3>full cart</h3>)}
                    </ItemProducts>
                </Items>
                {
                    show && (<CartTotal />)
                }
            </Main>
        </>
    )
}

export default ShoppingCart
