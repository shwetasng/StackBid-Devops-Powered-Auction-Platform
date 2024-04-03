import React from 'react';
import './cart.css'; // Import the Cart.css file

const Cart = ({ items }) => {
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="cart-items">
        {items && items.length > 0 ? (
          items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
