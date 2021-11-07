import React from 'react'
import { ProductDesc, ProductDetails, ProductDiv, ProductImage, ProductRate, ProductCartPrice, DeleteBtn } from '../styles/ShoppingCartStyle'
import {StarRate} from '@material-ui/icons';
import CurrencyFormat from 'react-currency-format';
import {useCart} from '../features/cartContext'



function CartProducts({cart, title, showDeleteBtn}) {

    const {dispatch} = useCart()

    const removeProduct = (id) => {
        dispatch({type: 'delete_product', id})
    }
    return (
        <>
            <h3 className='items__title add-border'>{title}</h3>
            {
                cart?.map(({id, desc, rate, price, image}) => (
                    <ProductDiv key={Math.random()} id={id}>
                        <ProductImage>
                            <img src={`${image}`} alt='product'/>
                        </ProductImage>
                        <ProductDetails>
                            <ProductDesc>{desc}</ProductDesc>
                            <ProductRate>
                                {Array(5).fill('').map((_, i) => (
                                    <span key={Math.random()} className={i+1 <= rate ? 'gold' : ''}>
                                        <StarRate stroke={"#e17d2c"} strokeWidth={1} className='rateIcon' />
                                    </span>
                                ))}
                            </ProductRate>
                            <ProductCartPrice>
                                <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} allowNegative={false} fixedDecimalScale={true} decimalScale={2} thousandSpacing={'3'} renderText={(val) => <>
                                    {<span className='price'>{val}</span>}
                                </>}/>
                            </ProductCartPrice>
                            {
                                showDeleteBtn === true && <DeleteBtn onClick={() => removeProduct(id)}>Delete From Cart</DeleteBtn>
                            }
                        </ProductDetails>
                    </ProductDiv>
                ))
            }
        </>
    )
}

export default CartProducts
