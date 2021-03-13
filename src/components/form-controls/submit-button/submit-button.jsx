import React, { Component } from 'react'
import axios from 'axios'
import './submit-button.css';



class SubmitButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            redirect: null
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.props.method == 'GET') {
            axios.get(this.props.endpoint)
                .then(data => console.log(data))
        } else if (this.props.method == 'POST') {
            axios.post(this.props.endpoint)
                .then(data => console.log(data))
        }
    }

    render() {
        return (
            <button type="submit" disabled={this.props.disabled || ''} onSubmit={this.handleSubmit}>
                {this.props.name || 'Submit'}
            </button>
        )
    }
}

export default SubmitButton
