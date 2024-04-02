import React, { useState, useEffect } from 'react';
import './cart.css'; // Import the CSS file for styling

const Cart = ({ selectedBids }) => {
  // State to store the total amount
  const [totalAmount, setTotalAmount] = useState(0);

  // Function to calculate the total amount
  const calculateTotalAmount = () => {
    if (selectedBids && selectedBids.length > 0) {
      let total = 0;
      selectedBids.forEach((bid) => {
        total += bid.amount; // Assuming each bid has an 'amount' property
      });
      setTotalAmount(total);
    } else {
      setTotalAmount(0); // If no selectedBids, set totalAmount to 0
    }
  };

  // Calculate the total amount when component mounts or when selectedBids change
  useEffect(() => {
    calculateTotalAmount();
  }, [selectedBids]);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="cart-items">
        {selectedBids && selectedBids.map((bid, index) => (
          <div key={index} className="cart-item">
            <div>Item: {bid.itemName}</div>
            <div>Amount: ${bid.amount}</div>
          </div>
        ))}
      </div>
      <div className="cart-total">Total: ${totalAmount}</div>
    </div>
  );
};

export default Cart;
