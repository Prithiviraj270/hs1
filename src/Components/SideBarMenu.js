// SidebarMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SideBarMenu.css'

const SidebarMenu = () => {
  return (
    <div className="sidebar-menu">
      <ul>
        <li><Link to="/hanger-entry">Hanger Entry</Link></li>
        <li><Link to="/hanger-details">Hanger Details</Link></li>
        <li><Link to="/test-entry">Test Entry</Link></li>
        <li><Link to="/courier-entry">Courier Entry</Link></li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
