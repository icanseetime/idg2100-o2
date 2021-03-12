import React, { Component } from 'react'
import './RegisterForm.css'

// Components
import FormInput from '../form-input/form-input'
import SubmitButton from '../submit-button/submit-button'
import Select from '../select/select'
import MatchingPasswords from '../matching-passwords/MatchingPasswords'

// Regexp patterns
import { pattern } from '../../../utils/pattern'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formInputs: {},
            formIncomplete: true,
        }

        this.validate = this.validate.bind(this)
        this.checkFormCompletion = this.checkFormCompletion.bind(this)
        this.generateForm = this.generateForm.bind(this)

        this.generateForm()
    }

    generateForm() {
        let newStates = this.state.formInputs

        this.formContent = []
        // Generate form inputs from Object
        Object.keys(this.props.inputs).forEach(type => {
            switch (type) {
                case 'FormInput':
                    Object.entries(this.props.inputs[type]).forEach(formInput => {
                        const [key, value] = formInput
                        this.formContent.push(<FormInput type={value.type} title={value.title} name={key} pattern={pattern[value.pattern]} onValidate={this.validate} />)
                        newStates[key] = false
                    })
                    break
                case 'MatchingPasswords':
                    Object.entries(this.props.inputs[type]).forEach(passMatch => {
                        const [key, value] = passMatch
                        this.formContent.push(<MatchingPasswords pattern={pattern[value.pattern]} onValidate={this.validate} />)
                        newStates[key] = false
                    })
                    break
                case 'Select':
                    Object.entries(this.props.inputs[type]).forEach(select => {
                        const [key, value] = select
                        this.formContent.push(<Select title={value.title} name={key} options={value.options} onValidate={this.validate} />)
                        newStates[key] = false
                    })
                    break
                default:
                    break
            }
        })

        // Set states for validation
        this.setState({ newStates })
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
            <form className="Form" action={this.props.action} method={this.props.method}>
                {this.formContent}
                <SubmitButton name={this.props.inputs.SubmitButton.name} disabled={this.state.formIncomplete} />
            </form>
        )
    }
}

export default Form
