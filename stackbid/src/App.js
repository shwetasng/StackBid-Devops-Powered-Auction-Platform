import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import SellerHistory from "./Components/SellerHistory/SellerHistory"; // Import SellerHistory component
import "./App.css";
import UploadItem from "./Components/UploadItem/UploadItem";
<<<<<<< HEAD
import Feedback from "./Components/feedback/feedback";
import login from "./Components/login";
import History from "./Components/History/history";
import Cart from "./Components/Cart/cart";
import Profile from "./Components/Profile/profile";
=======
import Footer from "./Components/Footer/Footer";

>>>>>>> c81b66eaf2752e754df65e8122079e6db2011c72
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<login /> */}
        {/*< History / >*/}
        {/*<Cart />*/}

        {/*<Profile /> */}
        {/* <Feedback /> */}
        <UploadItem />
        {/* <Navbar/> */}
        {/* {<AboutUs/> } */}
        {/* <SellerHistory/> */}
        <Footer />
      </header>
    </div>
  );
}

export default App;
