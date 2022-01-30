
import React, { Component } from 'react';
import logo from './roosterlogo.jpeg';
import './App.css';
import Alarm from './containers/Alarm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Alarm/>
      </div>
    );
  }

}

export default App;