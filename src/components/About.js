import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import WorldlyIcon from './icons/WorldlyIcon';
import WorldMap from './WorldMap';

class About extends Component {
  render() {
    return (
      <section id="about" className="about">
        <Fade bottom>
          <div className="about__title">
            <h1>my story</h1>
          </div>
        </Fade>
        <div className="about__description">
          <Fade bottom>
            <p>
              Hi <span role="img" aria-label="smile">🙂</span>! I'm Kirien, and <b>programming</b> is my primary <b>creative outlet</b>, in addition to my <b>profession</b>. Before I learned to write in computer languages, I was a voracious <b>writer</b> and reader of the English language, particularly of lyrical prose and poetry, and taught myself other languages whenever I could. But for a variety of reasons, I grew increasingly aware of the limitations of what can be expressed, as well as the reach and impact, of the written word alone. Programming - or rather, <b>the creation of digital interactive experiences through code</b> - filled in almost all of the missing parts, and I feel fortunate to have discovered it.
            </p>
          </Fade>

          <Fade bottom>
            <p>
              My life's work is in <b>perfect alignment</b> with digital technology's greatest impact: bringing people, cultures, and ecosystems around the world together in connection and communication. The language of technology cannot be limited to one culture; to one geographically-bound experience of the world; just as all that I value and desire to express is a reflection of every human language I've studied and every country I've lived or been in.
            </p>
          </Fade>

          <Fade bottom>
            <p>
              I want to <b>connect</b> with humans anywhere in the world who identify with practicing, aspiring to practice, or just appreciating the creation of digital technology for these purposes and more. You can <AnchorLink offset="50" href="#contact">write to me</AnchorLink> in <b>English</b>, <b>norsk</b>, <b>中文</b> or something else!
            </p>
          </Fade>
        </div>
        <div className="about__subtitle--container">
          <Fade left><div className="about__subtitle--item"><h2>global</h2></div></Fade>
          <Zoom><div className="about__subtitle--item"><WorldlyIcon className="about__worldly-icon" /></div></Zoom>
          <Fade right><div className="about__subtitle--item"><h2>footprint</h2></div></Fade>
        </div>

        <WorldMap />
      </section>
    );
  }
}

export default About;
