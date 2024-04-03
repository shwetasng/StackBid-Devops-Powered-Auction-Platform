import React from "react";
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
    <div className="App">
      <header className="App-header">
        {/* <Login /> */}
        <SignUp />
        {/* <History /> */}
        {/* <Cart /> */}
        {/* <Profile /> */}
        {/* <Feedback /> */}
        {/* <UploadItem /> */}
        {/* <Navbar/> */}
        {/* {<AboutUs/> } */}
        <SellerHistory />
        {/* <Footer /> */}
      </header>
    </div>
  );
}

export default App;
