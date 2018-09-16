import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typing from 'react-typing-animation';
import DownArrowIcon from './icons/DownArrowIcon';

/**
 * Intro section: animated interactive fun using pixi.js
 */
class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = { typingFinished: false };
  }

  /**
   * Update state after initial typing is finished, used to hide the
   * backspaced words that are only shown during typing and not after
   */
  onFinishedTyping = () => {
    this.setState({ typingFinished: true });
  }

  /**
   * Render react element
   */
  render() {
    return (
      <div id="top" className="intro">
        <div className="intro__title">
          <Typing speed={75} startDelay={375} onFinishedTyping={this.onFinishedTyping}>
            <h1>
              <span>k</span>
              <span>i</span>
              <span>r</span>
              <span>i</span>
              <span>e</span>
              <span>n</span>
              &nbsp;
              <span>e</span>
              <span>y</span>
              <span>m</span>
              <span>a</span>
            </h1>
              {
                !this.state.typingFinished &&
                <div className="intro__title--temp">
                  <h2>writer</h2>
                  <Typing.Reset count={1} delay={500} />
                  <h2>global citizen</h2>
                  <Typing.Reset count={1} delay={500} />
                </div>
              }
            <h2>front end developer</h2>
          </Typing>
        </div>
        <AnchorLink offset="50" href="#about" className="intro__arrow">
          <DownArrowIcon />
        </AnchorLink>
      </div> 
    );
  }
}

export default Intro;