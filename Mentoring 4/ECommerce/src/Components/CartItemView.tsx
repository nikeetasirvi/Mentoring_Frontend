import React from 'react';
import { CartItemModel } from '../Models/cart';
import { Row, Col, Button } from 'react-bootstrap';
import ProductModel from '../Models/products';

type Props = {
  item: CartItemModel,
  addToCart: (product: ProductModel) => void,
  removeFromCart: (product: ProductModel) => void
}

const CartItemView = ({ item, addToCart, removeFromCart }: Props) => {
  return (
    <Row>
      <Col lg={5}>{item.product.name}</Col>
      <Col lg={1}><Button className='btn-sm mb-1' variant='danger' onClick={() => { removeFromCart(item.product) }}>-</Button></Col>
      <Col lg={1}><Button className='btn-sm' variant='primary' onClick={() => { addToCart(item.product) }}>+</Button></Col>
      <Col lg={5} style={{ textAlign: 'right' }}>{item.quantity}x{item.product.price}</Col>
    </Row>
  );
}

export default CartItemView;