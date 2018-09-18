import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import CodepenIcon from './icons/CodepenIcon';

class Contact extends Component {
  render() {
    return (
      <section className="contact" id="contact">
        <Fade bottom>
          <div className="contact__title">
            <h1>contact me</h1>
          </div>
        </Fade>

        <div className="contact__form">
          <form action="https://formspree.io/stonewoodleaf@gmail.com" method="POST" autoComplete="off">
            <Fade left>
              <div className="contact__form--details">
                <input type="text" name="name" id="nme" placeholder="Your Name" required />
                <label htmlFor="nme" className="contact__form--label">Name</label>
              </div>
            </Fade>
            <Fade right>
              <div className="contact__form--details">
                <input type="email" name="_replyto" id="eml" placeholder="Email" required />
                <label htmlFor="eml" className="contact__form--label">Email</label>
              </div>
            </Fade>
            <Fade bottom>
              <div className="contact__form--message">
                <textarea name="_replyto" id="msg" placeholder="Message" required ></textarea>
                <label htmlFor="msg" className="contact__form--label">Message</label>
              </div>
            </Fade>
            <Fade right><button type="submit" className="contact__form--submit">Send</button></Fade>
          </form>
        </div>

        <Zoom>
          <div className="contact__icons">
            <a href="https://github.com/stonecrafter" target="_blank" rel="noopener noreferrer"><GithubIcon transform="translate(-14, 15) scale(3)"/></a>
            <a href="https://www.linkedin.com/in/stonecrafter" target="_blank" rel="noopener noreferrer"><LinkedinIcon transform="translate(-14, 15) scale(3)"/></a>
            <a href="https://codepen.io/stonecrafter" target="_blank" rel="noopener noreferrer"><CodepenIcon transform="translate(-14, 15) scale(3)"/></a>
          </div>
        </Zoom>
      </section>
    );
  }
}

export default Contact;
