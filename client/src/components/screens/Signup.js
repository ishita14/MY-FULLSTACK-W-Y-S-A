import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
const Signup = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    
    const uploadfields = () => {
        // if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        //     M.toast({ html: 'invalid email', classes: "#c62828 red darken-3" })
        //     return
        // }
        fetch("/signup", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password,
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }
                else {
                    M.toast({ html: data.message, classes: "#c62828 green darken-3" })
                    history.push('/')
                }
            }).catch(err => [
                console.log(err)
            ])
    }

    return (
        <div className="mycard" >
            <div className="card auth-card input-field indigo lighten-1" >
                <h2> I'm Wysa</h2>
                <h6>Want to be my friend? </h6>
                <h6>Please sign up! </h6>


                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #4527a0 deep-purple darken-3" onClick={() => uploadfields()}>Signup</button>
                <h5>
                    <Link to="/signin">Already my friend?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signup