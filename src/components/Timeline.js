import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Timeline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="timeline">
        <Fade bottom>
          <div className="timeline__title">
            <h1 id="timeline">timeline</h1>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Timeline;
