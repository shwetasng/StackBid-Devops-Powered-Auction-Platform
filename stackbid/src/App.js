import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import Login from "./Components/login/login";
import Feedback from "./Components/feedback/feedback";
import SellerHistory from "./Components/SellerHistory/SellerHistory"; // Import SellerHistory component
import "./App.css";
import UploadItem from "./Components/UploadItem/UploadItem";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        {/* <Feedback /> */}
        {/* <UploadItem /> */}
        {/* <Navbar/> */}
        {/* {<AboutUs/> } */}
        {/* <SellerHistory/> */}
        <Footer />
      </header>
    </div>
  );
}

export default App;
