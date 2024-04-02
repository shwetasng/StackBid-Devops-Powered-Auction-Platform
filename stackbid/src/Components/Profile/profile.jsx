import React, { useState } from 'react';
import './profile.css'; // Import the CSS file for styling

const ProfileCustomer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    // Perform any additional logic if needed (e.g., validation)
    setProfilePhoto(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic (e.g., send data to server)
    // For now, we'll just log the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Gender:', gender);
    console.log('Profile Photo:', profilePhoto);
    // Reset form fields after submission
    setName('');
    setEmail('');
    setPhoneNumber('');
    setGender('');
    setProfilePhoto(null);
  };

  return (
    <div className="profile-container">
      <h2>Customer Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <label>Phone Number:</label>
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        
        <label>Profile Photo:</label>
        <input type="file" accept="image/*" onChange={handleProfilePhotoChange} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfileCustomer;
