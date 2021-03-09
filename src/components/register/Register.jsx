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
                    <label>
                        Confirm password
                        <input type="password" name="confirmPass" />
                    </label>
                    <label>
                        Role
                        <select name="role" id="role">
                            <option disabled selected value="">--Choose a role--</option>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            {/* <option value="guest">Guest</option> */}
                            {/* <option value="admin">Administrator</option> */}
                        </select>
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