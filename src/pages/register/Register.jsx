import React, { Component } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

import Form from '../../components/form-controls/form/Form'
import formValues from './formValues.json'

class Register extends Component {
    render() {
        return (
            <div className="Register">
                <h2>Register new user</h2>
                <Form method="POST" action="/api/users/new" inputs={formValues} />
                <div>
                    <p>
                        Already have an account? <Link to="/login">Log in</Link>
                    </p>
                </div>
            </div>)
    }
}

export default Register