import React, { Component } from 'react';
import './App.css';
import MusicBox from './containers/MusicBox';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MusicBox />
      </div>
    );
  }
}

export default App;
