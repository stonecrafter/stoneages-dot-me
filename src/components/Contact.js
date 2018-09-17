import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="contact" id="contact">
        <Fade bottom>
          <div className="contact__title">
            <h1>contact me</h1>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Contact;
