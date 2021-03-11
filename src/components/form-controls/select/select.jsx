import React, { Component } from 'react'
import './select.css';


class Select extends Component {
    constructor(props) {
        super(props)
        this.state = { valid: false }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        if (e.target.value) {
            this.setState({ valid: true })
            this.props.onValidate(e.target.name, true)
        }
    }

    render() {
        let borderColor = this.state.valid ? 'var(--color-available)' : 'var(--color-busy)'
        return (
            <label className='Select'>
                {this.props.title}
                <select style={{ border: `5px solid ${borderColor}` }} name={this.props.name} onChange={this.handleChange} defaultValue={false}>
                    <option value={false} disabled>-- Select your {this.props.title.toLowerCase()} --</option>
                    {this.props.options.map((option) => {
                        return <option key={option} value={option}>{option}</option>
                    })}
                </select>
            </label>
        )
    }
}

export default Select
