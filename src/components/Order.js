import React from 'react'
import CartProducts from '../components/CartProducts';
import { ItemProducts } from '../styles/ShoppingCartStyle';
import moment from 'moment'
import CurrencyFormat from 'react-currency-format';
import {OrderStyle} from '../styles/OrdersStyle'

function Order({order}) {
    return (
        <OrderStyle>
            <ItemProducts>
                <CartProducts cart={order?.cart} title={`order in ${moment.unix(order.createdAt).format('MMMM Do YYYY, h:mm:ss a')}`} showDeleteBtn={false}/>

                <CurrencyFormat value={order?.amount / 100} displayType={'text'} thousandSeparator={true} prefix={'$'} allowNegative={false} fixedDecimalScale={true} decimalScale={2} thousandSpacing={'3'} renderText={(val) => <>
                    {<span className='price order__total'>Order Total: {val}</span>}
                </>}/>
            </ItemProducts>
        </OrderStyle>
    )
}

export default Order
