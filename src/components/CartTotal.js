import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { MainBtn } from '../styles/GlobalStyle';
import { Total } from '../styles/ShoppingCartStyle';


function CartTotal() {
    return (
        <CurrencyFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'$'} allowNegative={false} fixedDecimalScale={true} decimalScale={true} thousandSpacing={'3'} renderText={(val) => <Total>
            <h3 className='total__title'>Subtotal (0 items): <strong>{val}</strong></h3>
            <div className='total__gift'>
                <input type="checkbox" name="gift" id="gift" /><span>this order contains a gift</span>
            </div>
            <MainBtn className='total__btn'>proceed to checkout</MainBtn>
        </Total>}/>
            
    )
}

export default CartTotal
