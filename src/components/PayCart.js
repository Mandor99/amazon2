import React, {useState, useEffect} from 'react'
import {StripeForm, ErrorMsg, PayBtn, PayBox, TotalPrice} from '../styles/PaymentStyle'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {useHistory} from 'react-router-dom'
import axiosInstance from '../http/instance'
// import axios from 'axios'
import {getTotal} from '../features/cartReducer'
import {useCart} from '../features/cartContext'
import {ItemProducts} from '../styles/ShoppingCartStyle'
import CurrencyFormat from 'react-currency-format';
import {db} from '../firebase'
import { doc, setDoc } from 'firebase/firestore';



function PayCart() {
    const {cart, dispatch} = useCart()
    const history = useHistory()
    const stripe = useStripe()
    const elements = useElements()

    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState(null)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState(false)
    const [clientSecretKey, setClientSecretKey] = useState('')

    useEffect(() => {
        //to generate a clientSecret to backend form every proceeded
        const getClientSecret = async () => {
            const {data} = await axiosInstance({
                method: 'POST',
                // the end point from server expect the total val query param
                url: `/payments/create?total=${getTotal(cart?.cart) * 100}`
            })
            setClientSecretKey(data.clientSecret) // clientSecret will come from backend
            console.log(data)
        }
        getClientSecret()
        
    }, [cart.cart])
    console.log('client secret >>> ', clientSecretKey)
    const handleChange = (e) => {
        setDisabled(!e.complete)
        setError(e.error ? e.error.message : '')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!stripe || !elements) return;
        setProcessing(true)
        await stripe.confirmCardPayment(clientSecretKey, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(async (res) => {
            console.log(res)
            try {
                setSucceeded(true)
                setProcessing(false)
                
                const paymentRef = doc(db, 'Users', cart?.user?.uid, 'Orders', res?.paymentIntent?.id)
                await setDoc(paymentRef, {
                    cart: cart?.cart,
                    amount: res?.paymentIntent?.amount,
                    createdAt: res?.paymentIntent?.created
                })

                dispatch({type: 'empty_cart'})
                
                history.replace('/orders')

            } catch (err) {
                alert(err.message)
            }
        })
    }

    return (
            <ItemProducts>
                <h3 className='items__title add-border'>card details</h3>
                <StripeForm onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange} options={{
                        hidePostalCode: true,
                        style: {
                            invalid: {
                                color: 'red'
                            }
                        }
                    }}/>

                    {error && <ErrorMsg>{error}</ErrorMsg>}

                    <CurrencyFormat value={getTotal(cart?.cart)} displayType={'text'} thousandSeparator={true} prefix={'$'} allowNegative={false} fixedDecimalScale={true} decimalScale={2} thousandSpacing={'3'} renderText={(val) => <PayBox>
                            <TotalPrice>Order Total: {val}</TotalPrice>
                            <PayBtn disabled={disabled || error || processing || !stripe}>Pay</PayBtn>
                        </PayBox>}
                    />
                </StripeForm>
            </ItemProducts>
    )
}

export default PayCart
