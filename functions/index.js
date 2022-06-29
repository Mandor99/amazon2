const functions = require('firebase-functions');
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`)
console.log(`${process.env.STRIPE_SECRET_KEY}`)

//CONFIG
const app = express()

//MIDDLEWARE
app.use(cors({origin: true}))
app.use(express.json())

//ROUTS
app.get('/', (req, res) => res.status(200).send(`hello AMAZON!`)) //in server endpoint
app.post('/payments/create', async(req, res) => {
    const {total} = req.query
    console.log(`payment received >>> ${total} for client secret >>> ${process.env.STRIPE_SECRET_KEY}`)

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