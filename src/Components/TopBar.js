// TopBar.js
import React, { useState } from 'react';
import './TopBar.css';
import SidebarMenu from './SideBarMenu';

const TopBar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
      <>
        <div className="top-bar">
            <div className='logo-container'>
                <h2 className='logo'>Hanger Store</h2>
            </div>
            <div className='menu-toggle-container'>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
        </div>
        <div className={`sidebar-menu ${menuVisible ? 'visible' : ''}`}>
            <SidebarMenu />
        </div>
      </>
    );
};

export default TopBar;
