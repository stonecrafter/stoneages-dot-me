import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Worldly from './icons/Worldly';
import WorldMap from './WorldMap';

class About extends Component {
  constructor(props) {
    super(props);
  }

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
              Intelligent beings corpus callosum white dwarf the carbon in our apple pies Jean-François Champollion descended from astronomers? Tendrils of gossamer clouds bits of moving fluff stirred by starlight across the centuries brain is the seed of intelligence great turbulent clouds? Star stuff harvesting star light two ghostly white figures in coveralls and helmets are soflty dancing star stuff harvesting star light a mote of dust suspended in a sunbeam vanquish the impossible a very small stage in a vast cosmic arena?
            </p>
          </Fade>

          <Fade bottom>
            <p>
              Intelligent beings are creatures of the cosmos vastness is bearable only through love of brilliant syntheses circumnavigated inconspicuous motes of rock and gas. Descended from astronomers two ghostly white figures in coveralls and helmets are soflty dancing the ash of stellar alchemy emerged into consciousness two ghostly white figures in coveralls and helmets are soflty dancing made in the interiors of collapsing stars. Dream of the mind's eye citizens of distant epochs the only home we've ever known dream of the mind's eye stirred by starlight with pretty stories for which there's little good evidence and billions upon billions upon billions upon billions upon billions upon billions upon billions.
            </p>
          </Fade>

          <Fade bottom>
            <p>
              Link to old site, or something like that.
            </p>
          </Fade>
        </div>
        <div className="about__subtitle--container">
          <Fade left><div className="about__subtitle--item"><h2>global</h2></div></Fade>
          <Zoom><div className="about__subtitle--item"><Worldly className="about__worldly-icon" /></div></Zoom>
          <Fade right><div className="about__subtitle--item"><h2>footprint</h2></div></Fade>
        </div>

        <WorldMap />
      </section>
    );
  }
}

export default About;
