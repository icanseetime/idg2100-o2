import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import UserContext from '../../utils/UserContext'


class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.handleLogOut()
    }

    handleLogOut() {
        localStorage.removeItem('userAuth')
    }

    render() {
        return (
            <>
                <UserContext.Consumer>
                    {values => {
                        values.toggleValidUser()
                    }}
                </UserContext.Consumer>
                <Redirect to="/home" />
            </>
        )
    }
}

export default ForgotPassword