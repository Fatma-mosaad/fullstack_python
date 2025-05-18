import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return <p className="text-center py-5">Your cart is empty.</p>;

  return (
    <div className="container my-5">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="border p-3 mb-3 d-flex align-items-center justify-content-between"
        >
          <img src={item.thumbnail} alt={item.title} width="80" />
          <div className="flex-grow-1 ms-3">
            <h5>{item.title}</h5>
            <p>Price: ${item.price * item.quantity}</p>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-outline-secondary"
                onClick={() => dispatch(decreaseQuantity(item.id))}
              >
                −
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                className="btn btn-outline-secondary"
                onClick={() => dispatch(increaseQuantity(item.id))}
              >
                +
              </button>
            </div>
          </div>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
      <h4 className="text-end">Total: ${totalPrice.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
