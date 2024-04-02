import React from 'react';
import './history.css'; // Import the CSS file for styling

const History = ({ bidHistory }) => {
  return (
    <div className="history-container">
      <h2>Bid History</h2>
      <div className="bid-list">
        {bidHistory && bidHistory.map((bid, index) => (
          <div key={index} className="bid-item">
            <div>Item: {bid.itemName}</div>
            <div>Bid Amount: ${bid.bidAmount}</div>
            <div>Status: {bid.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
