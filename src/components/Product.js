import React from 'react'
import { CartProduct, ProductImg, Desc, Rating, ProductPrice, CartBtn } from '../styles/ProductStyle'
import {StarRate} from '@material-ui/icons';

function Product({id, image, desc, rate, price}) {
    const priceRepresent = price.split('.')

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
                <span className='sign'>$</span>
                <span className='price'>{priceRepresent[0]}</span>
                <span className='dot'>.</span>
                <span className='decimal'>{priceRepresent[1]}</span>
            </ProductPrice>
            <CartBtn>Add to cart</CartBtn>
        </CartProduct>
    )
}

export default Product
