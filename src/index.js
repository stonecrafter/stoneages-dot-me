import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/index.css';

import Intro from './components/Intro';
import Header from './components/Header';
import About from './components/About';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

const App = () => (
  <div className="App">
    <Header />
    <Intro />
    <About />
    <Timeline />
    <Contact />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
