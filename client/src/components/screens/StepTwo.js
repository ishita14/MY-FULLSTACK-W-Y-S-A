import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import M from 'materialize-css'

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  const [error, setError] = useState(false);
  const [sleepGoal , setSleepGoal] = useState('')

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
      // checking if value of first name and last name is empty show error else take to step 2
      if (
        validator.isEmpty(sleepGoal) &&  validator.isEmpty(values.sleepGoal)
      ) {
        M.toast({ html: "Select any one", classes: "#c62828 red darken-3" })
      } else {
        let value = sleepGoal ? sleepGoal : values.sleepGoal
        handleFormData('sleepGoal',value)
        nextStep();
      }
    };
  return (
    <>
  <div className="mycard">
    <h3>That's a great goal.How long have you been struggling with your sleep</h3>
      <div className="card auth-card">
      <a class="waves-effect cyan btn" style={{'minWidth' : '80%' , 'margin-bottom': '5%'}} onClick={() => setSleepGoal('4 weeks')}><i class="material-icons left">cloud</i>4 weeks</a>
      <a class="waves-effect light-blue btn" style={{'minWidth' : '80%' , 'margin-bottom': '5%'}} onClick={() => setSleepGoal('8 weeks')}><i class="material-icons left">cloud</i>8 weeks </a>
      <a class="waves-effect deep-purple lighten-1 btn" style={{'minWidth' : '80%' , 'margin-bottom': '5%'}} onClick={() => setSleepGoal('12 weeks')}><i class="material-icons left">cloud</i>12 weeks</a>
      {sleepGoal ? <h3>{sleepGoal}</h3> : <h3>{values.sleepGoal}</h3>}
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" onClick={() => submitFormData()}>
                Next
              </Button>
            </div>
          </div>
          </div>
    </>
  );
};

export default StepTwo;

