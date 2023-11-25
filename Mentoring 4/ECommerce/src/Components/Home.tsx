import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './Header';
import ProductsList from './ProductsList';
import CartManager from './CartManager';
import CartModel, { CartItemModel } from '../Models/cart';
import ProductModel from '../Models/products';

const testCartItemsModel: CartItemModel[] = []
const testCartModel: CartModel = {
  cartItems: testCartItemsModel
}

const Home = () => {

  const [cart, setCart] = useState(testCartModel);

  const addToCart = (product: ProductModel) => {
    console.log("add to cart");
    const matchingItem = cart.cartItems.find(cartItem => {
      return cartItem.product.id === product.id;
    })
    if (matchingItem) {
      //we already have the new item in cart
      const updatedCartItems: CartItemModel[] = cart.cartItems.map(cartItem => {
        if (cartItem.product.id === product.id) {
          const updatedCartItem = {
            product: cartItem.product,
            quantity: cartItem.quantity + 1
          }
          //updating the cart item and adding back to cart
          return updatedCartItem;
        } else {
          const newCartItem = {
            product: cartItem.product,
            quantity: cartItem.quantity
          }
          //creating the same cart item and adding freshly to cart with no change
          return newCartItem;
        }
      })
      const updatedCart: CartModel = {
        cartItems: updatedCartItems
      }
      setCart(updatedCart)
    } else {
      //we dont have the new item in cart
      const newCartItem = {
        product: product,
        quantity: 1
      }
      const updatedCartItems: CartItemModel[] = [
        ...cart.cartItems,
        newCartItem
      ];
      const updatedCart: CartModel = {
        cartItems: updatedCartItems
      }
      setCart(updatedCart)
    }
  }

  const removeFromCart = (product: ProductModel) => {
    console.log("remove from cart");
    const updatedCartItems: CartItemModel[] = [];
    cart.cartItems.forEach(cartItem => {
      if (cartItem.product.id === product.id) {
        if (cartItem.quantity === 1) {
          //we totally want to remove the cart item so we will do nothing(not push this cart item to updatedCartItems)
        } else {
          //decrease the quantity by 1 and,add the decreased cartItem back to updatedcartItem
          const updatedCartItem = {
            product: cartItem.product,
            quantity: cartItem.quantity - 1
          }
          updatedCartItems.push(updatedCartItem)
        }
      } else {
        //push the cart item as it is back to updatedCartItem
        updatedCartItems.push(cartItem);
      }
    })
    const updatedCart: CartModel = {
      cartItems: updatedCartItems
    }
    setCart(updatedCart)
  }

  return (
    <Row>
      <Col lg={12}>
        <Header cart={cart}></Header>
      </Col>
      <Col lg={9}>
        <ProductsList addToCart={addToCart} removeFromCart={removeFromCart}></ProductsList>
      </Col>
      <Col lg={3}>
        <CartManager cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}></CartManager>
      </Col>
    </Row>
  );
}

export default Home;