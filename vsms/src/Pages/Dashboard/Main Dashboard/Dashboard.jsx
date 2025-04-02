import React, { useState } from 'react';
import './dashboard.css';
import { FaTachometerAlt, FaQuestionCircle, FaTools, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import EnquiryForm from '../Enquiry Form/EnquiryForm';
import ServiseRequestForm from '../Service Request Form/ServiseRequestForm';
import MyProfile from '../My Profile/MyProfile';
import Settings from '../Settings/Settings';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const username = "Safnas";

  const renderRightSection = () => {
    switch (activeSection) {
      case 'service-requests':
        return <ServiseRequestForm />;
      case 'enquiry':
        return <EnquiryForm />;
      case 'my-profile':
        return <MyProfile />;
      case 'settings':
        return <Settings />;
      case 'dashboard':
      default:
        return (
          <>
            <h1>Hello {username} !!! </h1>
            <h2>Welcome back to the Auto Mobile Hub Dashboard</h2>
            <p>Here you can manage your profile, view service requests, and more.</p>
            <p>Use the navigation bar on the left to access different sections of the dashboard.</p>
            <p>If you have any questions or need assistance, feel free to reach out.</p>
            <p>Thank you for being a part of our community!</p>
            <p>Have a great day!</p>
          </>
        );
    }
  };

  return (
    <div className='dashboard'>
      <div className='dashboard-header'>
        <h1>Welcome, {username}</h1>
      </div>
      <div className='dashboard-content'>
        <div className="left-section">
          <div className="user-profile">
            <img src="02.jpg" alt="User Profile" className="profile-image" />
            <h3 className="user-name">Safnas</h3>
          </div>
          <nav className="navigation-bar">
            <ul>
              <li>
                <a href="#" onClick={() => setActiveSection('dashboard')}>
                  <FaTachometerAlt className="nav-icon" />
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setActiveSection('enquiry')}>
                  <FaQuestionCircle className="nav-icon" />
                  Enquiry
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setActiveSection('service-requests')}>
                  <FaTools className="nav-icon" />
                  Service Requests
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setActiveSection('my-profile')}>
                  <FaUser className="nav-icon" />
                  My Profile
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setActiveSection('settings')}>
                  <FaCog className="nav-icon" />
                  Settings
                </a>
              </li>
              <li>
                <a href="/">
                  <FaSignOutAlt className="nav-icon" />
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right-section">
          {renderRightSection()}
        </div>
      </div>
      <div className='dashboard-footer'>
        <p>&copy; 2023 Auto Mobile Hub</p>
      </div>
    </div>
  );
}