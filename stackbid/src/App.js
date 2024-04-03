import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import SellerHistory from "./Components/SellerHistory/SellerHistory"; // Import SellerHistory component
import UploadItem from "./Components/UploadItem/UploadItem";
import Feedback from "./Components/feedback/feedback";
import login1 from "./Components/login/Signup";
// import login2 from "./Components/login/Login";
import History from "./Components/History/history";
import Cart from "./Components/Cart/cart";
import Profile from "./Components/Profile/profile";
import Reviews from "./Components/Reviews/Review";

import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <login /> */}
    {/* <Profile /> */}

        {/* < History /> */}
        {/* <Cart /> */}

        
        {/* <Feedback /> */}
        {/* <UploadItem /> */}
        {/* <Navbar/> */}
        {/* {<AboutUs/> } */}
        {/* <SellerHistory/> */}
        <Reviews />
        <Footer />
      </header>
    </div>
  );
}

export default App;
