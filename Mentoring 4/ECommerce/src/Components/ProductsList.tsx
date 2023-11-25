import React from 'react';
import products from '../Data/products';
import Product from './Product';
import { Row } from 'react-bootstrap';
import ProductModel from '../Models/products';

type Props = {
  addToCart: (product: ProductModel) => void,
  removeFromCart: (product: ProductModel) => void
}

const ProductsList = ({ addToCart, removeFromCart }: Props) => {
  return (
    <Row style={{ backgroundColor: 'lightcyan', marginTop: '2%' }}>
      <h3>Products</h3>
      {
        products.map(product => (
          <Product product={product} addToCart={addToCart} removeFromCart={removeFromCart}></Product>
        ))
      }
    </Row>
  );
}

export default ProductsList;