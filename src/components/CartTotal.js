import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { MainBtn } from '../styles/GlobalStyle';
import { Total } from '../styles/ShoppingCartStyle';
import {useCart} from '../features/cartContext'
import {useHistory} from 'react-router-dom'
import {getTotal} from '../features/cartReducer'

function CartTotal() {

    const history = useHistory()
    const {cart} = useCart()

    const paymentRedirect = () => {
        cart?.cart.length > 0 && history.push('/payment')
    }

    return (
        <CurrencyFormat value={getTotal(cart?.cart)} displayType={'text'} thousandSeparator={true} prefix={'$'} allowNegative={false} fixedDecimalScale={true} decimalScale={2} thousandSpacing={'3'} renderText={(val) => <Total>
            <h3 className='total__title'>Subtotal ({cart?.cart.length} items): <strong>{val}</strong></h3>
            <div className='total__gift'>
                <input type="checkbox" name="gift" id="gift" /><span>this order contains a gift</span>
            </div>
            <MainBtn onClick={paymentRedirect} className='total__btn'>proceed to checkout</MainBtn>
        </Total>}/>
            
    )
}

export default CartTotal
