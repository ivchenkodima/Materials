import React, { Component } from 'react';

import './App.css';

import RegistationForm from './RegistrationForm';
import Header from './Header';

class App extends Component {
  render() {
    const items = [1,2,3,4,5];
    return (
      <div className="container">
        <Header />
        <RegistationForm  />
      </div>
    );
  }
}

export default App;
