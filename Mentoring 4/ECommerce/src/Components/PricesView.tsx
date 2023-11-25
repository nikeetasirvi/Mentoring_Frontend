import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import CartModel, { CartItemModel } from '../Models/cart';

type Props = {
  cart: CartModel;
}

const PricesView = ({ cart }: Props) => {

  const calculateAllItemsPrice = () => {
    let allItemsPrice = 0;
    cart.cartItems.forEach((cartItem: CartItemModel) => {
      allItemsPrice += cartItem.product.price * cartItem.quantity
    })
    return allItemsPrice
  }

  const calculateTaxPrice = () => {
    return ((calculateAllItemsPrice() * 10) / 100);
  }

  const calculateShippingPrice = () => {
    return 200;
  }

  const calculateTotalPrice = () => {
    return (calculateAllItemsPrice() + calculateTaxPrice() + calculateShippingPrice());
  }

  return (
    <div>
      <hr />
      <Row>
        <Col>Items Price</Col>
        <Col>{calculateAllItemsPrice()}</Col>
      </Row>
      <Row>
        <Col>Tax Price</Col>
        <Col>{calculateTaxPrice()}</Col>
      </Row>
      <Row>
        <Col>Shipping Price</Col>
        <Col>{calculateShippingPrice()}</Col>
      </Row>
      <hr />
      <Row>
        <Col>Total Price</Col>
        <Col>{calculateTotalPrice()}</Col>
      </Row>
      <Row>
        <Col>
          <Button>Checkout</Button>
        </Col>
      </Row>
    </div>
  );
}

export default PricesView;