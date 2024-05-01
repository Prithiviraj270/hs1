// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './Components/TopBar';
import MainContent from './Components/MainContent';
import HangerEntry from './Components/HangerEntry';
import HangerComponent from './Components/HangerDetails';
import TestEntry from './Components/TestEntry';
import CourierComponent from './Components/CourierEntry';
import SideBarMenu from './Components/SideBarMenu';


const App = () => {
  return (
    <Router>
      <div className="app">
      <TopBar onSelect={handleMenuSelection} />
        <div className="container">
          <SideBarMenu />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/hanger-entry" element={<HangerEntry />} />
            <Route path="/hanger-details" element={<HangerComponent />} />
            <Route path="/test-entry" element={<TestEntry />} />
            <Route path="/courier-entry" element={<CourierComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;