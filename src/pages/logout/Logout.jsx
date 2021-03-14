import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.handleLogOut()
        this.props.toggleValidUser()
    }

    handleLogOut() {
        localStorage.removeItem('userAuth')
    }

    render() {
        return (
            <>
                <Redirect to="/home" />
            </>
        )
    }
}

export default ForgotPassword