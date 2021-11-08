import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import {db} from '../firebase'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';
import {useCart} from '../features/cartContext'
import { Title } from '../styles/OrdersStyle';
import Order from '../components/Order';
import { UnderNav } from '../styles/GlobalStyle';


function Orders() {
    const {cart} = useCart()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        if(cart?.user) {
            const Orders = collection(db, 'Users', cart?.user?.uid, 'Orders')
            const q = query(Orders, orderBy('createdAt', 'desc'))
            const unSub = onSnapshot(q, (snap) => {
                setOrders(snap.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                })))
            })
            return (() => {
                unSub()
            })
        } else {
            setOrders([])
        }

    }, [cart?.user])

    return (
        <>
            <Navbar />
            <UnderNav>
                <Title>{orders?.length > 0 ? 'Your Orders' : 'You Didn\'t make any order, yet!'}</Title>
            </UnderNav>
            
            {
                orders.map(order => (
                    <Order order={order} key={order?.id}/>
                ))
            }
            
        </>
    )
}

export default Orders
