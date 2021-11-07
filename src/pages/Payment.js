import React from 'react'
import {useCart} from '../features/cartContext'
import CartProducts from '../components/CartProducts';
import { ItemProducts } from '../styles/ShoppingCartStyle';
import Navbar from '../components/Navbar';
import {Elements} from '@stripe/react-stripe-js'; // provider for connect stripe with app 
import {loadStripe} from '@stripe/stripe-js';
import PayCart from '../components/PayCart';

//out of comp not to render it every time with comp
//this promise verify the key & connect with our app
// const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`)
const stripePromise = loadStripe('pk_test_51JpsXMIT8Bb5uYq5oydpyjgqacxHVQF3cI9xDN11VlSpJjnCl3EHsJqhIk8xxxaoOKnI4HIdZzjD9tuJ4wHEbsEJ00fklYkn8s')

function Payment() {
    console.log(process.env.REACT_APP_STRIPE_KEY)
    const {cart} = useCart()
    return (
        <>
            <Navbar />
            <ItemProducts>
                <CartProducts cart={cart?.cart} title={'review items and delivery'} showDeleteBtn={true}/> 
            </ItemProducts>
            <Elements stripe={stripePromise}>
                <PayCart />
            </Elements>
        </>
    )
}

export default Payment