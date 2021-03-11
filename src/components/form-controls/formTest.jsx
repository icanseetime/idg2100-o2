import React, { Component } from 'react'
import FormInput from './form-input/form-input'
import SubmitButton from './submit-button/submit-button'
import Select from './select/select'
import './formTest.css'

// Regexp patterns
import { pattern } from '../../utils/pattern'

class formTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formInputs: {
                firstName: false,
                lastName: false,
                email: false,
                role: false,
                password: false,
                confirmPassword: false
            },
            formIncomplete: true,
            passwordMatch: pattern.password
        }

        this.setPasswordMatch = this.setPasswordMatch.bind(this)
        this.validate = this.validate.bind(this)
        this.checkFormCompletion = this.checkFormCompletion.bind(this)
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
        // Get no. of inputs in form
        const formInputs = this.state.formInputs
        let invalid = Object.keys(formInputs).length

        // Check how many are still invalid
        for (const input in formInputs) {
            if (formInputs[input]) {
                invalid--
            }
        }

        // Set state to activate button if all are valid
        if (!invalid) {
            this.setState({
                formIncomplete: false
            })
        }
    }

    render() {
        return (
            <div className="Form">
                <h2>Form Test</h2>
                <form action="#" method="POST">
                    <FormInput type="text" title="First name" name="firstName" pattern={pattern.name} onValidate={this.validate} />
                    <FormInput type="text" title="Last name" name="lastName" pattern={pattern.name} onValidate={this.validate} />
                    <FormInput type="email" title="Email" name="email" pattern={pattern.email} onValidate={this.validate} />
                    <Select title="Role" name="role" options={['Student', 'Teacher']} onValidate={this.validate} />
                    <FormInput type="password" title="Password" name="password" pattern={pattern.password} onPasswordChange={this.setPasswordMatch} onValidate={this.validate} />
                    <FormInput type="password" title="Confirm password" name="confirmPassword" pattern={`^${this.state.passwordMatch}$`} onValidate={this.validate} />

                    <SubmitButton name="register" disabled={this.state.formIncomplete} />
                </form>
            </div>

        )
    }
}

export default formTest
