import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import M from 'materialize-css'

const Final = ({ values }) => {
  const [bedTime ,setBedTime] = useState('')

  const [wakeUpTime ,setwakeUpTime] = useState('')
  const [duration ,setduration] = useState('')

  const uploadfields = () => {
    values.bedTime = bedTime;
    values.wakeUpTime = wakeUpTime;
    values.duration = duration
    fetch("/sleepQNA",{
      method : "Post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
    },
    body: JSON.stringify({
        values
    })
    }).then(res => res.json())
    .then(data => {
        if (data.error) {
            M.toast({ html: 'Fill empty field!', classes: "#c62828 red darken-3" })
        }
        else {
            M.toast({ html: 'we have successfully added your record', classes: "#c62828 green darken-3" })
        }
    }).catch(err => [
        console.log(err)
    ])
  }

  //destructuring the object from values
  const { sleepGoal,
    sleepStruggle } = values;
  return (
    <><div className="mycard">
    <div className="card auth-card input-field" >
        <h3>Finally!!</h3>
        <input
            type="text"
            placeholder="What time do you go to bed for sleep? "
            value={bedTime}
            onChange={(e) => setBedTime(e.target.value)}
        />
        <input
            type="text"
            placeholder="What is your Wake up time?"
            value={wakeUpTime}
            onChange={(e) => setwakeUpTime(e.target.value)}
        />
        <input
            type="Number"
            placeholder="How many hours sleep do you get? "
            value={duration}
            onChange={(e) => setduration(e.target.value)}
        />
        <button className="btn waves-effect waves-light #4527a0 deep-purple darken-3" onClick={() => uploadfields()}>submit</button>
    
    </div>
    </div>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>sleep struggle :</strong> {sleepStruggle}{" "}
          </p>
          <p>
            <strong>sleep Goal :</strong> {sleepGoal}{" "}
          </p>
          <p>
            <strong>Bed Time :</strong> {bedTime}{" "}
          </p>
          <p>
            <strong>WakeUp Time :</strong> {wakeUpTime}{" "}
          </p>
          <p>
            <strong>Sleep Duration :</strong> {duration}{" "}
          </p>
        </Card.Body>
      </Card>
     
    </>
  );
};

export default Final;