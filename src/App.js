import React, { Component } from 'react';
import './App.css';
import RobotsList from './Components/RobotsList';

class App extends Component {
  render() {
    return (
      <div className="tc">
        <h2>MY ROBOTS FRIENDS</h2>
        <RobotsList />
      </div>
    );
  }
}

export default App;
