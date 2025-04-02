import React from 'react';
import './myProfile.css';

export default function MyProfile() {
  return (
    <div className="my-profile-container">
      <h1>My Profile</h1>
      <div className="profile-card">
        <img
          src="02.jpg"
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-details">
          <p><strong>Name:</strong> Safnas</p> <br></br>
          <p><strong>Email:</strong> Safnas@example.com</p> <br></br>
          <p><strong>Phone:</strong> +1 234 567 890</p> <br></br>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
}