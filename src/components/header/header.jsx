import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css';


class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/user">User home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/login">Log in</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
