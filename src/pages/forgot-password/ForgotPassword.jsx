import React, { Component } from 'react'
import './ForgotPassword.css'
import { Link } from 'react-router-dom'

import formValues from './forgotPassword.json'
import Form from '../../components/form-controls/form/Form'

class ForgotPassword extends Component {
    render() {
        return (
            <div className="ForgotPassword">
                <h2>Get new password</h2>
                <Form method="POST" action="#" inputs={formValues} />

                <div>
                    <p>
                        New user? <Link to="/register">Register here</Link>
                    </p>
                </div>
            </div>)
    }
}

export default ForgotPassword;