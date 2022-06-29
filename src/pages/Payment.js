import React from 'react'
import {useCart} from '../features/cartContext'
import CartProducts from '../components/CartProducts';
import { ItemProducts } from '../styles/ShoppingCartStyle';
import Navbar from '../components/Navbar';
import {Elements} from '@stripe/react-stripe-js'; // provider for connect stripe with app 
import {loadStripe} from '@stripe/stripe-js';
import PayCart from '../components/PayCart';
import { UnderNav } from '../styles/GlobalStyle';

//out of comp not to render it every time with comp
//this promise verify the key & connect with our app
// const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`)
const CSK = 'pk_test_51JpsXMIT8Bb5uYq5oydpyjgqacxHVQF3cI9xDN11VlSpJjnCl3EHsJqhIk8xxxaoOKnI4HIdZzjD9tuJ4wHEbsEJ00fklYkn8s'
const stripePromise = loadStripe(CSK)

function Payment() {
    console.log(CSK)
    const {cart} = useCart()
    return (
        <>
            <Navbar />
            <UnderNav>
                <ItemProducts>
                    <CartProducts cart={cart?.cart} title={'review items and delivery'} showDeleteBtn={true}/> 
                </ItemProducts>
            </UnderNav>
        
            <Elements stripe={stripePromise}>
                <PayCart />
            </Elements>
        </>
    )
}

export default Payment
