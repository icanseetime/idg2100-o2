import React, { Component } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

class Register extends Component {
    render() {
        return (
            <div className="Register">
                <h2>Register new user</h2>
                <form action="#">
                    <label>
                        First name
                        <input type="text" name="firstName" />
                    </label>
                    <label>
                        Last name
                        <input type="text" name="lastName" />
                    </label>
                    <label>
                        E-mail
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Password
                        <input type="password" name="password" />
                    </label>
                    <input type="submit" value="Register" />
                </form>
                <div>
                    <p>
                        Already have an account? <Link to="/login">Log in</Link>
                    </p>
                </div>
            </div>)
    }
}

export default Register;