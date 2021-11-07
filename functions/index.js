const functions = require('firebase-functions');
const express = require('express')
require('dotenv').config()
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`)
const cors = require('cors')

//CONFIG
const app = express()

//MIDDLEWARE
app.use(cors())
app.use(express.json())

//ROUTS
app.get('/', (req, res) => res.status(200).send('hello AMAZON!'))
app.post('/payments/create', async(req, res) => {
    const {total} = req.query
    console.log(`payment received >>> ${total}`)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // stripe calc it with cent so i multiple total * 100
        currency: 'usd',
        // payment_method_types: ['card'],
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

//LISTENER
exports.api = functions.https.onRequest(app)

//fake local endpoint from firebase emulator
// http://localhost:5001/clone2-246a7/us-central1/api/payments/create?total=1011