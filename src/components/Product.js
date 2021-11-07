import React from 'react'
import { CartProduct, ProductImg, Desc, Rating, ProductPrice, CartBtn } from '../styles/ProductStyle'
import {StarRate} from '@material-ui/icons';
import {useCart} from '../features/cartContext'
import CurrencyFormat from 'react-currency-format';


function Product({id, image, desc, rate, price}) {
    // const priceRepresent = price.split('.')
    const {dispatch} = useCart()

    const addProduct = () => {
        dispatch({type: 'add_product', product: {
            id,
            desc, 
            rate, 
            price, 
            image
        }})
    }

    const getStyledPrice = (val) => {
        let valAsArr = val.slice(1).split('.')

        return (
            <>
                <span className='sign'>{val[0]}</span>
                <span className='price'>{valAsArr[0]}</span>
                <span className='dot'>.</span>
                <span className='decimal'>{valAsArr[1]}</span> 
            </>
        )
    }

    return (
        <CartProduct>
            <ProductImg>
                <img src={image} alt="product" className="product-img" />
            </ProductImg>
            <Desc>{desc}</Desc>
            <Rating>
                {Array(5).fill('').map((_, i) => (
                    <span key={Math.random()} className={i+1 <= rate ? 'gold' : ''}>
                        <StarRate stroke={"#e17d2c"} strokeWidth={1} className='rateIcon' />
                    </span>
                ))}
            </Rating>
            <ProductPrice>
                <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} allowNegative={false} fixedDecimalScale={true} decimalScale={2} thousandSpacing={'3'} renderText={(val) => <>
                    {getStyledPrice(val)}
            </>}/>
            </ProductPrice>
            <CartBtn onClick={addProduct}>Add to cart</CartBtn>
        </CartProduct>
    )
}

export default Product
