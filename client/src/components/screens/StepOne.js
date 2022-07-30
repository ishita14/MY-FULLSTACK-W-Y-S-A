import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import M from 'materialize-css'

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);
  const [sleepStruggle , setsleepStruggle] = useState('')

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(sleepStruggle) &&  validator.isEmpty(values.sleepStruggle)
    ) {
      M.toast({ html: "Select any one", classes: "#c62828 red darken-3" })
    } else {
      let value = sleepStruggle ? sleepStruggle : values.sleepStruggle
      handleFormData('sleepStruggle',value)
      nextStep();
    }
  };


  return (
    <div className="mycard " >
      <h3 >Let's say in a few weeks,you're sleeping well.What would change? </h3>
      <div className="card auth-card">
      <a class="waves-effect cyan btn" style={{'minWidth' : '100%' , 'margin-bottom': '5%'}} onClick={() => setsleepStruggle('I would sleep easily')}><i class="material-icons left">brightness_2</i>I would sleep easily</a>
      <a class="waves-effect  light-blue darken-1 btn" style={{'minWidth' : '100%' , 'margin-bottom': '5%'}} onClick={() => setsleepStruggle('I would sleep through the night')}><i class="material-icons left">brightness_2</i>I would sleep through the night</a>
      <a class="waves-effect  deep-purple lighten-1 btn" style={{'minWidth' : '100%' , 'margin-bottom': '5%'}} onClick={() => setsleepStruggle('Id wake up on time, refreshed')}><i class="material-icons left">brightness_2</i>I'd wake up on time, refreshed</a>
      {sleepStruggle ? <h3>{sleepStruggle}</h3> : <h3>{values.sleepStruggle}</h3>}
      <Button variant="primary" onClick={() => submitFormData()}>
         Continue
      </Button>
    </div>
    </div>
  );
};

export default StepOne;











  