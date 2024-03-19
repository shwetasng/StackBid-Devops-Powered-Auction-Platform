import React from 'react';
import './UploadItem.css'; // Import the UploadItem.css file

const UploadItem = () => {
  return (
    <div className="upload-item-container">
      <div className="upload-form-wrapper">
        <div className="upload-form-left">
          <input type="text" placeholder="Item Name" />
          <textarea placeholder="Description" />
          <button className="submit-button">Submit</button>
        </div>
        <div className="upload-form-right">
          <label htmlFor="file-upload" className="file-upload-label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              className="bi bi-arrow-up-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7.646 5.854a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 9H4.5a.5.5 0 0 1 0-1h5.793L7.646 6.146a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </label>
          <input type="file" id="file-upload" className="file-upload-input" />
        </div>
      </div>
    </div>
  );
};

export default UploadItem;
