import React from 'react';
import AboutUs from './Components/AboutUs/AboutUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Replace the logo with your AboutUs component */}
        <AboutUs />
      </header>
    </div>
  );
}

export default App;
