import React, { useState } from 'react';
import './settings.css';

export default function Settings() {
  const [userData, setUserData] = useState({
    name: 'Safnas',
    email: 'Safnas@example.com',
    phone: '123-456-7890',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add logic to save updated data to the backend
    console.log('Updated Data:', userData);
  };

  const handleDelete = () => {
    // Add logic to delete the user profile
    console.log('Profile Deleted');
    alert('Profile deleted successfully!');
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-form">
        <label>
          <strong>
          Name:
          </strong>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </label>
        <label>
          <strong>
          Email:
          </strong>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </label>
        <label>
          <strong>
          Phone:
          </strong>
          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </label>
        <div className="settings-actions">
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleEdit}>Edit</button>
          )}
          <button onClick={handleDelete} className="delete-button">
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
}