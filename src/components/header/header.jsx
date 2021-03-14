import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css';
import UserContext from '../../utils/UserContext'


class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <nav>
                    <UserContext.Consumer>
                        {values => (
                            // console.log(values),
                            values.validUser ?
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/user">User</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link to="/logout">Logout</Link>
                                    </li>
                                </ul>
                                :
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">Log in</Link>
                                    </li>
                                </ul>
                        )
                        }
                    </UserContext.Consumer>
                </nav>
            </header>
        )
    }
}

export default Header
