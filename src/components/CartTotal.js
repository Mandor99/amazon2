import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { MainBtn } from '../styles/GlobalStyle';
import { Total } from '../styles/ShoppingCartStyle';
import {useCart} from '../features/cartContext'


function CartTotal() {
    const {cart} = useCart()
    const getTotal = (cart) => {
        return cart.reduce((sum, product) => sum + Number(product.price), 0)
    }

    return (
        <CurrencyFormat value={getTotal(cart?.cart)} displayType={'text'} thousandSeparator={true} prefix={'$'} allowNegative={false} fixedDecimalScale={true} decimalScale={2} thousandSpacing={'3'} renderText={(val) => <Total>
            <h3 className='total__title'>Subtotal ({cart?.cart.length} items): <strong>{val}</strong></h3>
            <div className='total__gift'>
                <input type="checkbox" name="gift" id="gift" /><span>this order contains a gift</span>
            </div>
            <MainBtn className='total__btn'>proceed to checkout</MainBtn>
        </Total>}/>
            
    )
}

export default CartTotal
