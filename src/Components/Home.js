import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CustomTabs from './Nav';
import './Home.css';
import TaskList from './TaskList'; // Import the TaskList component
import HangerComponent from './HangerDetails';
import HangerEntry from './HangerEntry';
import CourierDetails from './CourierDetails';
import CourierComponent from './CourierEntry';
import TestReportComponent from './TestReport';
import TestEntry from './TestEntry';
import SideBarMenu from './SideBarMenu';

const Home = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("Task List"); // Update the initial state

  const handleGoBackClick = () => {
    navigate('/');
  };

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <div className="home-container">
        <div className='logo-container'>
          <h2 className='logo'>Hanger Store</h2>
        </div>
        <div className='go-back-button-container'>
          <Button variant="primary" onClick={handleGoBackClick}>Go Back</Button>
        </div>
        <div> 
          <SideBarMenu onSelect={handleMenuSelect} />
        </div>
      </div>
      <div className="menu-content">
        {selectedMenu === "Task List" && <TaskList />} {/* Render TaskList component for 'Task List' menu */}
        {selectedMenu === "Hanger Details" && <HangerComponent />}
        {selectedMenu === "Hanger Entry" && <HangerEntry />}
        {selectedMenu === "Courier Details" && <CourierDetails />}
        {selectedMenu === "Courier Entry" && <CourierComponent />}
        {selectedMenu === "Test Report" && <TestReportComponent />}
        {selectedMenu === "Test Entry" && <TestEntry />}
      </div>
    </>
  );
}

export default Home;
