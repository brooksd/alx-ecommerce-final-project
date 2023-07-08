import React, { useState, useEffect } from 'react'
import { Col, Row} from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList)
  const { error, loading, products } = productList

  useEffect(() => {
    dispatch( listProducts())
    // async function fetchProducts(){
      // const { data } = await axios.get(`/api/products/`)
      // setProducts( data )
    // } fetchProducts()
  }, [dispatch])

  return (
    <div>
      <h1>Latest Products</h1>
      {/* Loading message and error message */}
      {loading ? (
        <Loader/>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              {/* Product Component passing in a product prop*/}
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen