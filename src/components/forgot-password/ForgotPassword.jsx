import React, { Component } from 'react'
import './ForgotPassword.css'
import { Link } from 'react-router-dom'

class ForgotPassword extends Component {
    render() {
        return (
            <div className="ForgotPassword">
                <h2>Get new password</h2>
                <form action="#">
                    <label>
                        E-mail
                        <input type="email" name="email" />
                    </label>
                    <input type="submit" value="Send" />
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