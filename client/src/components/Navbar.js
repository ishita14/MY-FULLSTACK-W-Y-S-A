import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { userContext } from '../App'
const NavBar = () => {
    const { state, dispatch } = useContext(userContext)
    const history = useHistory()
    const renderList = () => {
        if (state) {
            return [
                <li>
                    <button className="btn waves-effect waves-light #4527a0 deep-purple darken-3  "
                        onClick={() => {
                            localStorage.clear()
                            dispatch({ type: "CLEAR" })
                            history.push('/signin')
                        }}
                    >Logout</button>
                </li>
            ]

        } else {
            return [
                <li><Link to="/signin">Signin</Link></li>,
                <li><Link to="/signup">SignUp</Link></li>
            ]
        }
    }
    return (
        <nav>
            <div className="nav-wrapper white" >
                <Link to={state ? "/" : "/signin"} className="brand-logo   left">Wysa Sleep</Link>
                <ul id="nav-mobile" className="right">
                    {renderList()}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
