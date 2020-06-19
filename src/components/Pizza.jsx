import React from 'react';

export default function Pizza(props) {
    const { details } = props;

    if(Object.keys(details.toppings) === true){
        console.log(Object.keys);
    }

    return(
        <div>
            <h2>{details.name}, your order is on it's way</h2>
            <p>{details.size}</p>
            <p>{details.sauce}</p>
            <p>{details.instruction}</p>
        </div>
    );
}