import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import SellerHistory from "./Components/SellerHistory/SellerHistory"; // Import SellerHistory component
import "./App.css";
import UploadItem from "./Components/UploadItem/UploadItem";
import Feedback from "./Components/feedback/feedback";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/login/login";
import History from "./Components/History/history";
import Cart from "./Components/Cart/cart";
import Profile from "./Components/Profile/profile";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/history" element={<History />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
