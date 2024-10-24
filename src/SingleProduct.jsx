import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
}

export default Cart;
