import React, { useState, useEffect } from 'react';
import './App.css';

function Card (props) {

    return(

        <div className="card">
            <h3>{props.text}</h3>
            <p className="card_details">{props.details}</p>
            <a href={props.link}>check it out</a>
        </div>

    )
}

export default Card;