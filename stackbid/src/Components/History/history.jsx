import React, { useState } from 'react';
import './history.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import Image1 from './img1.jpeg'; // Import images
import Image2 from './img2.jpeg';
import Image3 from './img3.jpeg';
import Image4 from './img4.jpeg';
import Image5 from './img5.jpeg';
import Image6 from './img5.jpeg';

const MetricsDisplay = ({ data, onClose }) => {
  if (!data) return null; // Add a check to prevent accessing properties of null

  return (
    <div className="metrics-display" onClick={(e) => e.stopPropagation()}>
      <div className="metrics-content">
        {/* Display metrics or summary data here */}
      </div>
    </div>
  );
};

const SellerHistory = () => {
  const [auctionHistory, setAuctionHistory] = useState([
    {
      id: 1,
      name: 'PAINTING-1',
      image: Image1,
      description: 'Sold on 12/03/2024',
      status: 'sold'
    },
    {
      id: 2,
      name: 'PAINTING-2',
      image: Image2,
      description: 'Not sold yet',
      status: 'unsold'
    },
    {
      id: 3,
      name: 'PAINTING-3',
      image: Image3,
      description: 'Sold on 15/03/2024',
      status: 'sold'
    },
    {
      id: 4,
      name: 'PAINTING-4',
      image: Image4,
      description: 'Sold on 15/03/2024',
      status: 'unsold'
    },
    {
      id: 5,
      name: 'PAINTING-5',
      image: Image5,
      description: 'Sold on 15/03/2024',
      status: 'sold'
    },
    {
      id: 6,
      name: 'PAINTING-6',
      image: Image6,
      description: 'Sold on 19/03/2024',
      status: 'unsold'
    },
    
    // Add more sample items as needed
  ]);

  const [showMetrics, setShowMetrics] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowMetrics = (item) => {
    setShowMetrics(true);
    setSelectedItem(item); // Ensure that selectedItem is correctly updated
  };

  const handleCloseMetrics = () => {
    setShowMetrics(false);
    setSelectedItem(null); // Ensure that selectedItem is set to null
  };

  return (
    <div>
      <nav className="navigation">
        {/* Navigation bar */}
      </nav>
      <div className="options-container">
        <div className="options-left">
          <span>Explore Your History</span>
        </div>
        <div className="options-right">
          <div className="options-group">
            <div className="sorting-option">
              <FontAwesomeIcon icon={faSort} className="icon" />
              <span>Sort By</span>
              {/* Dropdown for sorting options */}
            </div>
            <div className="filtering-option">
              <FontAwesomeIcon icon={faFilter} className="icon" />
              <span>Filter By</span>
              {/* Dropdown for filtering options */}
            </div>
            <div className="searching-option">
              <FontAwesomeIcon icon={faSearch} className="icon" />
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
      <div className={`history-container ${showMetrics ? 'blur' : ''}`}>
        <div className="auction-cards">
          {auctionHistory.map((item) => (
            <div className={`auction-card ${item.status === 'sold' ? 'sold' : 'unsold'}`} key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="description">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button onClick={() => handleShowMetrics(item)}>Show Metrics</button>
              </div>
            </div>
          ))}
        </div>
        {showMetrics && selectedItem && (
          <MetricsDisplay data={selectedItem} onClose={handleCloseMetrics} />
        )}
        {showMetrics && <div className="overlay" onClick={handleCloseMetrics}></div>}
      </div>
    </div>
  );
};

export default History;
