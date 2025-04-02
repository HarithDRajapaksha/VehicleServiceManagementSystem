import './App.css'
import HomePage from './Pages/Home page/HomePage'
import Loginpage from './Pages/Login Page/Loginpage'
import RegistrationPage from './Pages/Registration Page/RegistrationPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react' 
import Dashboard from './Pages/Dashboard/Main Dashboard/Dashboard'
import EnquiryForm from './Pages/Dashboard/Enquiry Form/EnquiryForm'
import ServiseRequestForm from './Pages/Dashboard/Service Request Form/ServiseRequestForm'
import MyProfile from './Pages/Dashboard/My Profile/MyProfile'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/enquiry" element={<EnquiryForm />} />
          <Route path="/dashboard/service-request" element={<ServiseRequestForm />} />
          <Route path="/dashboard/my-profile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
