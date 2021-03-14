import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

import Form from '../../components/form-controls/form/Form'
import formValues from './formValues.json'

class Login extends Component {
    render() {
        return (
            <section className="Login">
                <h2>Log in</h2>
                <Form method="POST" action="/api/users/login" inputs={formValues} />

                <div>
                    <p>
                        New user? <Link to="/register">Register here</Link>
                    </p>
                    <p>
                        <Link to="/forgot-password">Forgot password?</Link>
                    </p>
                </div>
            </section>
        )
    }
}

export default Login;