import React from 'react';
import { Link } from 'react-router-dom';

export default function PizzaFrom(props) {
    const { values, onInputChange, onCheckboxChange, onSubmit } = props

    const cost = 17.99;
    const fillerImg = "https://ichef.bbci.co.uk/news/976/cpsprodpb/4016/production/_112360461_gettyimages-1083704790.jpg";

    return(
        <div>
            <div className = 'fillerImg'>
                <img src = {`${fillerImg}`} alt = 'filler pizza' />
            </div>
            <div className = 'form'>
                <h2>Build Your Own Pizza</h2>
                <form onSubmit = {onSubmit}>
                    <label className = 'formOption'>Name:&nbsp;&nbsp;
                        <input
                            name = 'name'
                            value = {values.name}
                            onChange = {onInputChange}
                            type = 'text'
                        />
                    </label>
                    <label className = 'formOption'>
                        <h4>Choice of Size</h4>
                        <p>*Required</p>
                        <select
                            value = {values.size}
                            onChange = {onInputChange}
                            name = 'size'
                        >
                            <option value = ''>--Select Size--</option>
                            <option value = 'Large'>Large</option>
                            <option value = 'Small'>Small</option>
                        </select>
                    </label>
                    <div className = 'formOption'>
                        <h4>Choice of Sauce</h4>
                        <p>*Required</p>
                        <label>
                            <input 
                                type = 'radio'
                                value = 'ogRed'
                                name = 'sauce'
                                checked = {values.sauce === 'ogRed'}
                                onChange = {onInputChange}
                            />
                        Original Red</label>
                        <label>
                            <input 
                                type = 'radio'
                                value = 'bbq'
                                name = 'sauce'
                                checked = {values.sauce === 'bbq'}
                                onChange = {onInputChange}
                            />
                        BBQ Sauce</label>
                    </div>
                    <div className = 'formOption'>
                        <h4>Add Toppings</h4>
                        <p>Choose up to 10</p>
                        <label>
                            <input
                                name = 'pepperoni'
                                type = 'checkbox'
                                checked = {values.toppings.pepperoni}
                                onChange = {onCheckboxChange}
                            />
                        Pepperoni</label>
                        <label>
                            <input
                                name = 'sausage'
                                type = 'checkbox'
                                checked = {values.toppings.sausage}
                                onChange = {onCheckboxChange}
                            />
                        Sausage</label>
                        <label>
                            <input
                                name = 'canadianBacon'
                                type = 'checkbox'
                                checked = {values.toppings.canadianBacon}
                                onChange = {onCheckboxChange}
                            />
                        Canadian Bacon</label>
                        <label>
                            <input
                                name = 'blackOlives'
                                type = 'checkbox'
                                checked = {values.toppings.blackOlives}
                                onChange = {onCheckboxChange}
                            />
                        Black Olives</label>
                        <label>
                            <input
                                name = 'onions'
                                type = 'checkbox'
                                checked = {values.toppings.onions}
                                onChange = {onCheckboxChange}
                            />
                        Onions</label>
                        <label>
                            <input
                                name = 'extraCheese'
                                type = 'checkbox'
                                checked = {values.toppings.extraCheese}
                                onChange = {onCheckboxChange}
                            />
                        Extra Cheese</label>
                    </div>
                    {/* <div className = 'formOption'>
                        <h4>Choice of Substitute</h4>
                        <p>Choose up to 1</p>
                        <label className = 'switch'>
                            <input 
                                name = 'crust'
                                type = 'checkbox'
                                checked = {values.substitue.crust}
                                onChange = {onCheckboxChange}
                            />
                            <span className = 'slider'></span>
                        Gluten Free Crust (+ $1.00)</label>
                    </div> */}
                    <div className = 'formOption'>
                        <h4>Special Instructions</h4>
                        <input
                            name = 'instruction'
                            value = {values.instruction}
                            type = 'text'
                            placeholder = "Anything else you'd like to add?"
                            size = '40'
                            onChange = {onInputChange}
                        />
                    </div>
                    <hr></hr>
                    <div className = 'orderOption'>
                        <input
                            name = 'amount'
                            type = 'number'
                            value = {values.amount}
                            min = '0'
                            onChange = {onInputChange}
                        />
                        <Link to = '/pizza'><button>Add to Order <span>${cost}</span></button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}