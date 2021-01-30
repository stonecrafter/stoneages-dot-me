import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MediumIcon from './icons/MediumIcon';

class Contact extends Component {
  constructor() {
    super();

    // For form and submission
    this.state = {
      name: '',
      email: '',
      message: '',
      submitting: false,
      submissionSuccess: undefined,
      submissionMessage: '',
    };
  }

  /**
   * Update the state as form input changes
   */
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  /**
   * Submit the contact form
   */
  handleSubmit = (event) => {
    event.preventDefault();

    // Get the state values to be submitted
    const { name, email, message } = this.state;

    // Set the content type
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    // Do the submission, reset any prior submission results
    this.setState({
      submitting: true,
      submissionMessage: '',
      submissionSuccess: undefined,
    });
    axios
      .post('https://www.enformed.io/bpidqjmz/', { name, email, message })
      .then((res) => {
        let formName;
        let formEmail;
        let formMessage;
        let submissionMessage;
        let submissionSuccess;
        // If the request failed, the status will still be 200 OK, but the URL will be /failure
        // A weird way to check, but it works...
        if (_.includes(res.request.responseURL, 'failure')) {
          submissionMessage =
            'Uh oh, there was an error! Try one of the methods below to get in touch instead...';
          submissionSuccess = false;

          // Don't reset input if failure
          formName = this.state.name;
          formEmail = this.state.email;
          formMessage = this.state.message;
        } else {
          submissionMessage = 'Sent! I will get back to you shortly...';
          submissionSuccess = true;

          // Reset input if success
          formName = '';
          formEmail = '';
          formMessage = '';
        }

        this.setState({
          submitting: false,
          name: formName,
          email: formEmail,
          message: formMessage,
          submissionMessage,
          submissionSuccess,
        });
      });
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <section className="contact" id="contact">
        <Fade bottom>
          <div className="contact__title">
            <h1>contact me</h1>
          </div>
        </Fade>

        <div className="contact__form">
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <Fade left>
              <div className="contact__form--details">
                <input
                  type="text"
                  name="name"
                  id="nme"
                  value={name}
                  onChange={this.onChange}
                  placeholder="Your Name"
                  required
                />
                <label htmlFor="nme" className="contact__form--label">
                  Name
                </label>
              </div>
            </Fade>
            <Fade right>
              <div className="contact__form--details">
                <input
                  type="email"
                  name="email"
                  id="eml"
                  value={email}
                  onChange={this.onChange}
                  placeholder="Email"
                  required
                />
                <label htmlFor="eml" className="contact__form--label">
                  Email
                </label>
              </div>
            </Fade>
            <Fade bottom>
              <div className="contact__form--message">
                <textarea
                  name="message"
                  id="msg"
                  placeholder="Message"
                  value={message}
                  onChange={this.onChange}
                  required
                ></textarea>
                <label htmlFor="msg" className="contact__form--label">
                  Message
                </label>
              </div>
            </Fade>
            <input type="hidden" name="*honeypot" />
            <Fade right>
              <button
                type="submit"
                className="contact__form--submit"
                disabled={this.state.submitting}
              >
                {this.state.submitting ? 'Sending' : 'Send'}
              </button>
            </Fade>
            <div
              className={`contact__form--result ${this.state.submissionSuccess}`}
            >
              {this.state.submissionMessage && (
                <Fade>{this.state.submissionMessage}</Fade>
              )}
            </div>
          </form>
        </div>

        <Zoom>
          <div className="contact__icons">
            <div className="contact__icons--top">
              <a
                href="https://github.com/stonecrafter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
              <a
                href="https://stonecrafter.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MediumIcon />
              </a>
            </div>
            <div className="contact__icons--bottom">
              <a
                href="https://www.linkedin.com/in/stonecrafter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </Zoom>
      </section>
    );
  }
}

export default Contact;
