import React, { Component } from 'react'
import './ForgotPassword.css'
import { Link } from 'react-router-dom'

import formValues from './formValues.json'
import Form from '../../components/form-controls/form/Form'

class ForgotPassword extends Component {
    render() {
        return (
            <div className="ForgotPassword">
                <h2>Get new password</h2>
                <Form method="GET" action="http://localhost:5000/api/users/reset-password" inputs={formValues} />

                <div>
                    <p>
                        New user? <Link to="/register">Register here</Link>
                    </p>
                </div>
            </div>)
    }
}

export default ForgotPassword