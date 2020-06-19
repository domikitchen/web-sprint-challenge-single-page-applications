import React from 'react';

export default function Pizza(props) {
    const { details } = props;

    const topping = Array(details.toppings)[0];

    return(
        <div className = 'pizzaDoc'>
            <h2>{details.name}, your order is on it's way</h2>
            <p>{details.size}</p>
            <p>{details.sauce}</p>
            <ul>
            {
                Object.keys(details.toppings).map((topp, id) => {
                    if(topping[`${topp}`] === true){
                        console.log(topp);
                    return (<li key = {id}>{topp}</li>);
                    }
                })
            }
            </ul>
            <p>{details.instruction}</p>
        </div>
    );
}