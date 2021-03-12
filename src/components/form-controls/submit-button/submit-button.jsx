import React, { Component } from 'react'
import './submit-button.css';


class SubmitButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    render() {
        return (
            <button type="submit" disabled={this.props.disabled || ''}>
                {this.props.name || 'Submit'}
            </button>
        )
    }
}

export default SubmitButton