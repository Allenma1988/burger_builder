import React  from 'react';
import Logo from '../../../components/Layout/Logo/Logo';
import NavigationItems from '../NavigationItem/NavigationItems';
import './SideDrawer.css'


const sideDrawer = (props) => {
    //...
    return (
        <div className="SideDrawer">
            <div className="Logo">
                <Logo />
            </div>            
            <nav>
                <NavigationItems />
            </nav>
            
        </div>
    );

};
export default sideDrawer;
