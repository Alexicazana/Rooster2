
import React, { Component } from 'react';
import logo from './roosterlogo.jpeg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Alarm from './containers/Alarm';
import Home from './pages/Home';

function App() {
  return(
    <Router>
      <Home/>
    </Router>
  )
}

export default App;