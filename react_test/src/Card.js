import React, { useState, useEffect } from 'react';
import './App.css';

function Card (props) {

    return(

        <a href={props.link}>
            <div className="card">
                <h3>{props.text}</h3>
                <img className="card_img" src={props.bg_image} alt="some"></img>
                <p className="card_details">{props.details}</p>
                <div className="card_button">visit()</div>
                {/*<a href={props.link}>click to see more</a>*/}
            </div>
        </a>

    )
}

export default Card;