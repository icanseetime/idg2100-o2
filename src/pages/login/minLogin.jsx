import React, { Component } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <h2>Log in</h2>
                <form action="#">
                    <label>
                        E-mail
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Password
                        <input type="password" name="password" />
                    </label>
                    <input type="submit" value="Log in" />
                </form>
                <div>
                    <p>
                        New user? <Link to="/register">Register here</Link>
                    </p>
                    <p>
                        <Link to="/forgot-password">Forgot password?</Link>
                    </p>
                </div>

            </div>)
    }
}

export default Login;