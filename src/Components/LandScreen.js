import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from React Router
import './LandScreen.css';
import hangerImage from './hslogo.png'; // Import the image file

const LandScreen = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const navigateToTaskScheduler = () => {
    navigate('/task-scheduler'); // Use navigate function to programmatically navigate to '/task-scheduler' route
  };

  const navigateToHome = () => {
    navigate('/home'); // Use navigate function to programmatically navigate to '/home' route
  };

  return (
    <>
      <div className="header-container">
        <h1 className='Title'>Hanger Store</h1>
        <div className="badge-container">
          <Badge bg="secondary" className="custom-badge">
            Your Digital Closet
          </Badge>
        </div>
      </div>
      <div className="image-container" onClick={navigateToTaskScheduler}>
        <img src={hangerImage} alt="Hanger" className="hanger-image" />
      </div>
      <div className="button-container">
        <Button variant="primary" onClick={navigateToHome}>Get In</Button> {/* Use onClick to trigger navigation */}
      </div>
    </>
  );
}

export default LandScreen;
