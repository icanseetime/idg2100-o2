import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom"
import './Login.css'

import Form from '../../components/form-controls/form/Form'
import { isLoggedIn } from '../../utils/isAuth'
import formValues from './login.json'

//This component is implementing more than one functionality only for academic purposes.
//If the app is connected to a Backend, the auth logic should be implemented in a different file (SOLID)
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { redirect: null }
    }

    componentDidMount() {
        const isAuth = isLoggedIn()
        this.setState({ isAuth })
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="Login">
                <h2>Log in</h2>
                <Form method="GET" action="#" inputs={formValues} />

                {/* {!this.state.isAuth && <button onClick={this.handleLogIn}>Log In</button>}
                {this.state.isAuth && <button onClick={this.handleLogOut}>Log Out</button>} */}

                <div>
                    <p>
                        New user? <Link to="/register">Register here</Link>
                    </p>
                    <p>
                        <Link to="/forgot-password">Forgot password?</Link>
                    </p>
                </div>
            </div>
        )
    }

    handleLogIn = () => {
        localStorage.setItem('userAuth', JSON.stringify(true));
        this.setState({ redirect: "/user" });
    }

    handleLogOut = () => {
        localStorage.removeItem('userAuth');
        this.setState({ isAuth: false });

    }
}

export default Login;