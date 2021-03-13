import React, { Component } from 'react'
import FormInput from '../form-input/form-input'
import './MatchingPasswords.css'

class MatchingPasswords extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formInputs: {
                password: false,
                confirmPassword: false
            },
            passwordMatch: this.props.pattern,
            validPassMatch: false
        }

        this.setPasswordMatch = this.setPasswordMatch.bind(this)
        this.validate = this.validate.bind(this)
    }

    setPasswordMatch(newPattern) {
        this.setState({ passwordMatch: newPattern })
    }

    validate(name, value) {
        // Update which inputs are valid
        let formInputs = this.state.formInputs
        formInputs[name] = value
        this.setState({
            formInputs
        })
        this.checkFormCompletion()
    }

    checkFormCompletion() {
        // Set confirmPass to valid and send to parent component
        if (this.state.formInputs.password && this.state.formInputs.confirmPassword) {
            this.setState({
                validPassMatch: true
            })
            this.props.onValidate('matchingPasswords', this.state.passwordMatch, true)
        } else {
            this.setState({
                validPassMatch: false
            })
            this.props.onValidate('matchingPasswords', false)
        }
    }

    render() {
        return (
            <>
                <FormInput type="password" title="Password" name="password" pattern={this.props.pattern} onPasswordChange={this.setPasswordMatch} onValidate={this.validate} />
                <FormInput type="password" title="Confirm password" name="confirmPassword" pattern={`^${this.state.passwordMatch}$`} onValidate={this.validate} />
            </>
        )
    }
}

export default MatchingPasswords
