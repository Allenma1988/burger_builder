import React from 'react';
import './NavigationItem.css'

const navigationItem = (props) =>(
    <ul>
        <li className="NavigationItem">
            <a 
            href={props.link}>{props.children}</a>
        </li>
    </ul>

);

export default navigationItem;