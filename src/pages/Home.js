import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { UnderNav } from '../styles/GlobalStyle'

function Home() {
    return (
        <>
            <Navbar />
            <UnderNav>
			    <Header />
            </UnderNav>
            <Products />
            <Footer />
        </>
    )
}

export default Home
