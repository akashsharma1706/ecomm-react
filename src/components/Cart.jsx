// Cart.js
import React from 'react';

function Cart() {
  const cartItems = []; // Assume this contains the items in the cart

  const handleRemoveFromCart = (itemId) => {
    // Logic to remove item from cart
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="list-group">
          {cartItems.map(item => (
            <li key={item.id} className="list-group-item">
              <div className="row">
                <div className="col">{item.name}</div>
                <div className="col">Quantity: {item.quantity}</div>
                <div className="col">Price: ${item.price}</div>
                <div className="col">
                  <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
