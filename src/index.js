import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/index.css';

import Intro from './components/Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
