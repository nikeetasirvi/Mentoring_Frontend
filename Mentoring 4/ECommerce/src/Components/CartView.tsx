import React from 'react';
import CartModel, { CartItemModel } from '../Models/cart';
import CartItemView from './CartItemView';
import ProductModel from '../Models/products';

type Props = {
  cart: CartModel,
  addToCart: (product: ProductModel) => void,
  removeFromCart: (product: ProductModel) => void
}

const CartView = ({ cart, addToCart, removeFromCart }: Props) => {
  return (
    <div>
      {
        cart.cartItems.map((item: CartItemModel) => {
          return (
            <CartItemView item={item} addToCart={addToCart} removeFromCart={removeFromCart}></CartItemView>
          );
        })
      }
    </div>
  );
}

export default CartView;