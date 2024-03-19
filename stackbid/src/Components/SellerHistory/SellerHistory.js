import React, { useState } from 'react';
import './SellerHistory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import Image1 from './Car.jpg'; // Import images
import Image2 from './Lamp.jpg';
import Image3 from './Land.jpg';
import Image4 from './AntiqueClock.jpg';
import Image5 from './House.jpg';
import Image6 from './Sofa.jpg';
import Image7 from './Vase1.jpg';

const MetricsDisplay = ({ data, onClose }) => {
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
      name: 'Hyundai i20',
      image: Image1,
      description: 'Sold on 12/03/2024',
      status: 'sold'
    },
    {
      id: 2,
      name: 'Maharaja Lamp',
      image: Image2,
      description: 'Not sold yet',
      status: 'unsold'
    },
    {
      id: 3,
      name: 'Urban Plot',
      image: Image3,
      description: 'Sold on 15/03/2024',
      status: 'sold'
    },
    {
      id: 4,
      name: 'Clock',
      image: Image4,
      description: 'Sold on 15/03/2024',
      status: 'unsold'
    },
    {
      id: 5,
      name: 'Clock',
      image: Image5,
      description: 'Sold on 15/03/2024',
      status: 'sold'
    },
    {
      id: 6,
      name: 'Royal Sofa Set',
      image: Image6,
      description: 'Sold on 19/03/2024',
      status: 'unsold'
    },
    {
      id:7,
      name: 'Antique Vase',
      image: Image7,
      description: 'Sold on 19/03/2024',
      status: 'unsold'
    },
    // Add more sample items as needed
  ]);

  const [showMetrics, setShowMetrics] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowMetrics = (item) => {
    setShowMetrics(true);
    setSelectedItem(item);
  };

  const handleCloseMetrics = () => {
    setShowMetrics(false);
    setSelectedItem(null);
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

export default SellerHistory;
