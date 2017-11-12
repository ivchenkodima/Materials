import React, { Component } from 'react';

import './RegistrationForm.css';

class RegistationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('form is submitted. Email value is', this.state.email);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="E-mail"
          value={this.state.email}
          className="emailField"
        />
        <input
          type="text"
          placeholder="E-mail"
          onChange={this.handleEmailChange}
          className="emailField"
        />
        <button className="submitBtn">Save</button>
      </form>
    );
  }
}

export default RegistationForm;
