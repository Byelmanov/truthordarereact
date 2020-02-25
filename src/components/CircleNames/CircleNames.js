import React from 'react'
import './CircleNames.sass'

function CircleNames(props) {
    let numberOfPlayers = props.number;
    let arrayOfNames = Array.from(props.names);

    let elems = arrayOfNames.map((name, i) =>
        <p className={`circle__name circle__name${i + 1}`} key={i}>{name}</p>
    );


    return (
        <div className={`circle__names circle__names--${numberOfPlayers}`}>
            {elems}
        </div>
    )
}


export default CircleNames;