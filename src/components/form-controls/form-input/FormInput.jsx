import React, { Component } from 'react'
import './FormInput.css';


class FormInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            valid: false,
            pattern: new RegExp(this.props.pattern, 'i')
        }
        this.handleUserInput = this.handleUserInput.bind(this)
    }

    handleUserInput(e) {
        // Set value (and changed pattern)
        this.setState({
            input: e.target.value,
            pattern: new RegExp(this.props.pattern, 'i')
        })

        // Validation
        if (this.state.pattern.test(e.target.value)) {
            this.setState({ valid: true })
            this.props.onValidate(e.target.name, e.target.value, true)
        } else {
            this.setState({ valid: false })
            this.props.onValidate(e.target.name, e.target.value, false)
        }

        // Send password to form for match checking
        if (this.props.onPasswordChange) {
            this.props.onPasswordChange(e.target.value)
        }
    }

    render() {
        let borderColor = this.state.valid ? 'var(--color-available)' : 'var(--color-busy)'
        return (
            <label className='FormInput'>
                {this.props.title}
                <input style={{ border: `5px solid ${borderColor}` }}
                    type={this.props.type}
                    name={this.props.name}
                    value={this.state.input}
                    onChange={this.handleUserInput}
                />
            </label>
        )
    }
}

export default FormInput
