import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import ProductModel from '../Models/products';

type Props = {
  product: ProductModel,
  addToCart: (product: ProductModel) => void,
  removeFromCart: (product: ProductModel) => void
}

const Product = ({ product, addToCart, removeFromCart }: Props) => {
  return (
    <Col className="my-2">
      <Card style={{ width: '13rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.price}
          </Card.Text>
          <Button variant="primary" className='btn-sm' onClick={() => { addToCart(product) }}>Add To Cart</Button>
          <Button variant="danger" className='btn-sm' onClick={() => { removeFromCart(product) }}>Remove from Cart</Button>
        </Card.Body>
      </Card>
    </Col >
  );
}

export default Product;