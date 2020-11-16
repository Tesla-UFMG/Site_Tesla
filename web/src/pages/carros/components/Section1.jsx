import React from 'react'

import '../styles/Section1.css'

import { HashLink } from 'react-router-hash-link';

import image_scroll_icon from '../../../assets/icons/scroll-icon.svg'

function Section1(props) {
    return(
        <div id={props.Id} className="container-fluid px-0 div1">
            <div className="col-6 content">
                <h1 className="section-title">{props.carName}</h1>
                <p className="section-paragraph">{props.colocacao}</p>
            </div>

            <HashLink to={props.hashlinkBot}>
                <img src={image_scroll_icon} alt="scroll icon" className="scroll-bot-icon"></img>
            </HashLink>
        </div>
    );
}

export default Section1;