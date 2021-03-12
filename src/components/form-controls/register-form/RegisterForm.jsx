import React, { Component } from 'react'
import './RegisterForm.css'

// Components
import FormInput from '../form-input/form-input'
import SubmitButton from '../submit-button/submit-button'
import Select from '../select/select'
import MatchingPasswords from '../matching-passwords/MatchingPasswords'

// Regexp patterns
import { pattern } from '../../../utils/pattern'

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formInputs: {
                firstName: false,
                lastName: false,
                email: false,
                role: false,
                matchingPasswords: false
            },
            formIncomplete: true,
        }
        this.validate = this.validate.bind(this)
        this.checkFormCompletion = this.checkFormCompletion.bind(this)
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
        } else {
            this.setState({
                formIncomplete: true
            })
        }
    }

    render() {
        return (
            // TODO: remove div? 
            <div className="Form">
                <form action="#" method="POST">
                    <FormInput type="text" title="First name" name="firstName" pattern={pattern.name} onValidate={this.validate} />
                    <FormInput type="text" title="Last name" name="lastName" pattern={pattern.name} onValidate={this.validate} />
                    <FormInput type="email" title="E-mail" name="email" pattern={pattern.email} onValidate={this.validate} />
                    <MatchingPasswords onValidate={this.validate} pattern={pattern.password} />
                    <Select title="Role" name="role" options={['Student', 'Teacher']} onValidate={this.validate} />
                    <SubmitButton name="register" disabled={this.state.formIncomplete} />
                </form>
            </div>
        )
    }
}

export default RegisterForm
