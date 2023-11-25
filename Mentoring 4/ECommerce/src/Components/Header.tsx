import React from 'react';
import CartModel from '../Models/cart';
import { Button } from 'react-bootstrap';

type Props = {
  cart: CartModel
}

const Header = ({ cart }: Props) => {
  return (
    <div style={{ backgroundColor: 'lightcyan', height: '50px' }}>
      <h3 style={{ display: 'inline' }}>ECommerce Application</h3>
      <div style={{ float: 'right' }}>
        <span>Cart
          <Button variant="danger" className="btn-sm">{cart.cartItems.length}</Button>
        </span>
        <span><b>  welcome</b></span>
      </div>
    </div>
  );
}

export default Header;