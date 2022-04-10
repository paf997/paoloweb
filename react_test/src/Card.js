import React, { useState, useEffect } from 'react';
import './App.css';
import PieChart from './PieChart';
import dymaco from './dymaco-card-pic.png';
import beachPic from './beach_graffiti_alghero.jpeg';

function Card (props) {

    return(

        <div className="card">
            <img className="card_img" src={beachPic} alt="some"></img>
            {/*<h3>{props.text}</h3>
            <p className="card_details">{props.details}</p>
            <a href={props.link}>click to see more</a>*/}
    
        </div>

    )
}

export default Card;