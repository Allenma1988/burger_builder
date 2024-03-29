import React from 'react';
import './Toolbar.css';
import Logo from '../../Layout/Logo/Logo';
import NavigationItems from '../NavigationItem/NavigationItems'

const toolbar = (props) => (
    <header className="Toolbar">
        <div>Menu</div>
        <Logo height="80%" />
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>

);

export default toolbar;