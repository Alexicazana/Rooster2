
import React, { Component } from 'react';
import logo from './roosterlogo.jpeg';
import { CssBaseline } from '@material-ui/core/CssBaseline';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }

}

export default App;