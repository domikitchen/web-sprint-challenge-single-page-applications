import React, { useState } from "react";
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import * as Yup from 'yup'

import Home from './components/Home';
import PizzaForm from './components/PizzaForm';
import Pizza from './components/Pizza';
import { initalFormValues } from './components/initalFormValues';
import formSchema from './validation/formSchema';


const App = () => {
  const [formValues, setFormValues] = useState(initalFormValues);
  const [orderDetails, setOrderDetails] = useState([]);


  const onInputChange = evt => {
    const { name, value } = evt.target;

    setFormValues({
      ...formValues,
      [name]: value
    })

  }
  const onCheckboxChange = evt => {
    const { name, checked } = evt.target;

    setFormValues(
      {
        ...formValues,
        toppings: {
          ...formValues.toppings,
          [name]: checked,
        }
     },
     {
       ...formValues,
       substitue: {
         ...formValues.substitue,
         [name]: checked,
       }
    }
    );
  }
  const onSubmit = evt => {
    evt.preventDefault();

    const order = {
      ...formValues,
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      instruction: formValues.instruction.trim(),
      amount: formValues.amount,
      toppings: Object.values(formValues.toppings).filter(topping => (formValues.toppings[topping] === true)),
        // substitue: Object.keys(formValues.substitue)
        // .filter(crust => (formValues.substitue[crust] === true)),
    }
    setOrderDetails([...orderDetails, order]);
  }

  return (
    <div className = 'App'>
      <nav className = 'navBar'>
        <h1>Lambda Eats</h1>
          <Link to = '/'>Home</Link>
          <Link to = '/'>Help</Link>
      </nav>
      <Switch exact>
        <Route path = '/pizza-Form'>
          <PizzaForm 
            values = {formValues}
            onInputChange = {onInputChange}
            onCheckboxChange = {onCheckboxChange}
            onSubmit = {onSubmit}
          />
        </Route>

        <Route path = '/pizza'>
          <Pizza details = {formValues}/>
        </Route>

        <Route path = '/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
