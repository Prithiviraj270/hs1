import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';

const CustomTabs = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const closeNavBar = (event) => {
      if (isOpen && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', closeNavBar);
    return () => {
      document.removeEventListener('mousedown', closeNavBar);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu) => {
    onSelect(menu);
    setIsOpen(false); // Close the menu when a menu item is selected
  };

  return (
    <div className={`slide-nav-bar ${isOpen ? 'open' : ''}`} ref={navRef}>
      <nav>
        <ul>
          <li onClick={() => handleMenuClick('Hanger Details')}>Hanger Details</li>
          <li onClick={() => handleMenuClick('Hanger Entry')}>Hanger Entry</li>
          <li onClick={() => handleMenuClick('Courier Details')}>Courier Details</li>
          <li onClick={() => handleMenuClick('Courier Entry')}>Courier Entry</li>
          <li onClick={() => handleMenuClick('Test Report')}>Test Report</li>
          <li onClick={() => handleMenuClick('Test Entry')}>Test Entry</li>
        </ul>
      </nav>
      {!isOpen && (
        <button className="toggle-button" onClick={handleToggle}>
          ☰
        </button>
      )}
    </div>
  );
};

export default CustomTabs;
