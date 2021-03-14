import React, { Component } from 'react'
import './Form.css'
import axios from 'axios'

// Components
import FormInput from '../form-input/FormInput'
import SubmitButton from '../submit-button/SubmitButton'
import Select from '../select/Select'
import MatchingPasswords from '../matching-passwords/MatchingPasswords'

// Regexp patterns
import { pattern } from '../../../utils/pattern'
import { Redirect } from 'react-router'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formValues: {},
            validInputs: {},
            formIncomplete: true,
            redirect: false
        }

        this.validate = this.validate.bind(this)
        this.checkFormCompletion = this.checkFormCompletion.bind(this)
        this.generateForm = this.generateForm.bind(this)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)

        this.generateForm()
    }

    generateForm() {
        let newFormValues = this.state.formValues
        let newValidInputs = this.state.validInputs

        this.formContent = []
        // Generate form inputs from Object
        Object.keys(this.props.inputs).forEach(type => {
            switch (type) {
                case 'FormInput':
                    Object.entries(this.props.inputs[type]).forEach(formInput => {
                        const [key, value] = formInput
                        this.formContent.push(<FormInput type={value.type} title={value.title} name={key} pattern={pattern[value.pattern]} onValidate={this.validate} />)
                        newFormValues[key] = ''
                        newValidInputs[key] = false
                    })
                    break
                case 'MatchingPasswords':
                    Object.entries(this.props.inputs[type]).forEach(passMatch => {
                        const [key, value] = passMatch
                        this.formContent.push(<MatchingPasswords pattern={pattern[value.pattern]} onValidate={this.validate} />)
                        newFormValues[key] = ''
                        newValidInputs[key] = false
                    })
                    break
                case 'Select':
                    Object.entries(this.props.inputs[type]).forEach(select => {
                        const [key, value] = select
                        this.formContent.push(<Select title={value.title} name={key} options={value.options} onValidate={this.validate} />)
                        newFormValues[key] = ''
                        newValidInputs[key] = false
                    })
                    break
                default:
                    break
            }
        })

        // Set states for validation
        this.setState({ newFormValues })
        this.setState({ newValidInputs })
    }

    validate(name, value, valid) {
        // Update values of inputs
        let formValues = this.state.formValues
        formValues[name] = value
        this.setState({
            formValues
        })

        // Update which inputs are valid
        let validInputs = this.state.validInputs
        validInputs[name] = valid
        this.setState({
            validInputs
        })
        this.checkFormCompletion()
    }

    checkFormCompletion() {
        // Get no. of inputs in form
        const validInputs = this.state.validInputs
        let invalid = Object.keys(validInputs).length

        // Check how many are still invalid
        for (const input in validInputs) {
            if (validInputs[input]) {
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

    handleSubmitForm(e) {
        e.preventDefault()
        let queryParams = this.state.formValues
        if (this.props.method === 'GET') {
            axios.get(this.props.action, {
                params: {
                    ...queryParams
                }
            })
                .then(res => {
                    if (res.data.successMessage) {
                        this.setState({
                            successMessage: res.data.successMessage
                        })
                    } else {
                        this.setState({
                            errorMessage: res.data.errorMessage
                        })
                    }
                })
                .catch(err => console.log(err))
        } else if (this.props.method === 'POST') {
            axios.post(this.props.action, this.state.formValues)
                .then(res => {
                    if (res.data.localStorage) {
                        localStorage.setItem(res.data.localStorage, true)
                        this.props.toggleValidUser()
                    }
                    if (res.data.redirect) {
                        this.setState({
                            redirect: res.data.redirect
                        })
                    }
                    if (res.data.errorMessage) {
                        this.setState({
                            errorMessage: res.data.errorMessage
                        })
                    }
                })
                .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <>
                <form className="Form" onSubmit={this.handleSubmitForm}>
                    {this.formContent}
                    <SubmitButton name={this.props.inputs.SubmitButton.name} disabled={this.state.formIncomplete} />
                </form>
                {this.state.redirect && <Redirect to={this.state.redirect} />}
                {this.state.errorMessage && <p style={{ fontSize: ".8rem", color: "var(--color-busy)" }}>{this.state.errorMessage}</p>}
                {this.state.successMessage && <p style={{ fontSize: ".8rem", color: "var(--color-available)" }}>{this.state.successMessage}</p>}
            </>
        )
    }
}

export default Form
