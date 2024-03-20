import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import login from "./Components/login/login";
import feedback from "./Components/feedback/feedback";
import SellerHistory from "./Components/SellerHistory/SellerHistory"; // Import SellerHistory component
import "./App.css";
import UploadItem from "./Components/UploadItem/UploadItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UploadItem />
        {/* <Navbar/> */}
        {/* <AboutUs/> */}
        {/* <SellerHistory/> */}
      </header>
    </div>
  );
}

export default App;
