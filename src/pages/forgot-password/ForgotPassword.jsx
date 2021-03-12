import React, { Component } from 'react'
import './ForgotPassword.css'
import { Link } from 'react-router-dom'

import FormInput from '../../components/form-controls/form-input/form-input'

class ForgotPassword extends Component {
    render() {
        return (
            <div className="ForgotPassword">
                <h2>Get new password</h2>
                <form action="#">
                    <FormInput type="email" name="email" title="E-mail" />
                </form>
                <div>
                    <p>
                        New user? <Link to="/register">Register here</Link>
                    </p>
                </div>
            </div>)
    }
}

export default ForgotPassword;