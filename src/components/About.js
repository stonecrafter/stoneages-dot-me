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
              Hi <span role="img" aria-label="smile">🙂</span>! I'm Kirien, and <b>programming</b> is my primary <b>creative outlet</b>, in addition to my <b>profession</b>. Before I learned to write in computer languages, I was known mostly by my love for reading, writing, and learning human languages. Though I still enjoy creative writing, I've come to believe that the most effective form of art is <b>interactive</b> and that anything can be art, whether it is a CSS animation experiment or enterprise software.
            </p>
          </Fade>

          <Fade bottom>
            <p>
              My <b>life's work</b> is to bridge connection and communication across languages, cultures, and geographies; to co-create global citizenship and consciousness with other human beings; to work with and through digital technology as a key ally in the process on small and large scales. I challenge the belief that technology is inherently "unnatural" and encourages isolation. 
            </p>
          </Fade>

          <Fade bottom>
            <p>
              I always write code with the intention to <b>connect</b> and <b>communicate</b> - to another developer and to the likely less technically oriented end user. <b>Front-end development</b> is the perfect space where all of my interests and abilities intersect! I want to connect with humans anywhere in the world who identify with practicing, aspiring to practice, or just appreciating the creation of digital technology for these purposes and more. You can <AnchorLink offset="50" href="#contact">write to me</AnchorLink> in <b>English</b>, <b>norsk</b>, <b>中文</b> or something else!
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
