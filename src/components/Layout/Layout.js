import React from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'



const Layout =( props ) => (
    <div>

        <Toolbar />
        <SideDrawer />
        <main className="Content">
            {props.children}
        </main>
    </div>
);

export default Layout;