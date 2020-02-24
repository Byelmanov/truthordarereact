import React, { Component } from 'react';
import './Circle.sass'
import CircleNames from '../CircleNames/CircleNames.js'

function Circle(props) {
    let numberOfPlayers = props.number;
    let arrayOfLines = new Array();
    for (let i = 0, x = 0; i < numberOfPlayers; i++ , x += 360 / numberOfPlayers) {
        let styleForLine = {
            transform: "rotate(" + x + "deg)",
        };
        arrayOfLines[i] = (
            <div className="playArea__circleLine" key={i} style={styleForLine}>
                <div className="hidden"></div>
                <div className="shown"></div>
            </div>
        )
    }

    return (
        <div className="playArea__circle">
            {arrayOfLines}
            <div className="arrow" id="arrow"></div>
            <CircleNames number={numberOfPlayers} names={props.names} />
        </div>
    )

}



export default Circle;