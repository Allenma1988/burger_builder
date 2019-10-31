import React from 'react';
import './Backdrop.css';
//notes on 168, was suppose to create a clickable backgroup, but notes use <AUX> and i use div, but it didnt work (AUX dont work on windows)
const backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.clickedi}></div> : null

);

export default backdrop;