import React, { Component } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

import RegisterForm from '../form-controls/register-form/RegisterForm'

class Register extends Component {
    render() {
        return (
            <div className="Register">
                <h2>Register new user</h2>
                <RegisterForm />
                <div>
                    <p>
                        Already have an account? <Link to="/login">Log in</Link>
                    </p>
                </div>
            </div>)
    }
}

export default Register;