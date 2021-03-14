import React, { Component } from 'react'
import './SubmitButton.css';

class SubmitButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            redirect: null
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
