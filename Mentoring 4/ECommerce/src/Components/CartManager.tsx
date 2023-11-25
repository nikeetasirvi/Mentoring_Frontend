import React from 'react';
import CartModel from '../Models/cart';
import CartView from './CartView';
import PricesView from './PricesView';
import ProductModel from '../Models/products';

type Props = {
  cart: CartModel,
  addToCart: (product: ProductModel) => void,
  removeFromCart: (product: ProductModel) => void
}

const CartManager = ({ cart, addToCart, removeFromCart }: Props) => {
  return (
    <div style={{ backgroundColor: 'lightcyan', marginTop: '6%' }}>
      <h3>Cart Items</h3>
      <hr />
      <CartView cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}></CartView>
      {
        cart.cartItems.length !== 0 ? (
          <PricesView cart={cart}></PricesView>
        ) : null
      }

    </div>
  );
}

export default CartManager;