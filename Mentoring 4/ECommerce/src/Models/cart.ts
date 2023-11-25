import ProductsModel from '../Models/products';

export type CartItemModel = {
  product: ProductsModel,
  quantity: number
}

type CartModel = {
  cartItems: CartItemModel[]
}

export default CartModel;