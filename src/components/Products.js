import React, {useState, useEffect} from 'react'
import { Container } from '../styles/GlobalStyle'
import {ProductsContent, ProductsSection} from '../styles/ProductsStyle'
import axios from 'axios'
import Product from './Product'

function Products() {
    const [product, setProduct] = useState([]) //[] of {}
    useEffect(() => {
        axios.get('./productsData.json').then((res) => setProduct(res.data.products))

    }, [])
    return (
        <ProductsSection>
            <Container>
                <ProductsContent>
                    {
                        product?.map(({id, image, desc, rate, price}) => (
                            <Product key={id} id={id} image={image} desc={desc} rate={rate} price={price} />
                        ))
                    }
                </ProductsContent>
            </Container>
        </ProductsSection>
    )
}

export default Products
