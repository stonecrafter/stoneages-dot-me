import React from 'react';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import WorldlyIcon from './icons/WorldlyIcon';
import WorldMap from './WorldMap';

const About = () => (
  <section id="about" className="about">
    <Fade bottom>
      <div className="about__title">
        <h1>my story</h1>
      </div>
    </Fade>
    <div className="about__description">
      <Fade bottom>
        <p>
          Hi{' '}
          <span role="img" aria-label="smile">
            😌
          </span>{' '}
          ! I'm Kirien, a modern human being learning every day to more
          skillfully navigate, understand and appreciate what it means to be
          alive in the "Anthropocene". The ever-shifting dance between the
          digital and the material, between virtual and physical spaces, and
          what all of that means for our bodies, identities and relationships is
          one of the central themes of contemporary existence - and the one that
          I have chosen to focus more deeply on as my life's work for now. I
          became a front-end - or user interface - developer because of the
          opportunity to deep dive, and contribute something directly, into this
          space of intersection and direct interface between the digital and
          non-digital spheres.
        </p>
      </Fade>

      <Fade bottom>
        <p>
          At work, what motivates me the most is the ability to make an impact
          in the daily lives of other people - mostly "non-technical" end users.
          I've had experience in different technologies and frameworks over the
          years, and have come to believe that the best framework is simply the
          one that is best able to meet the end user's needs. If it's one I
          don't yet know, I'll happily learn it. My greatest professional
          strengths and values are quality, precision, awareness of details,
          reliability, patience, listening and empathy.
        </p>
      </Fade>

      <Fade bottom>
        <p>
          These days I am most curious about getting involved with
          digitalisation work within public / government services and the
          healthcare sectors. I've also been deeply nourished by prior
          experiences of mentoring newcomers to the tech industry that
          identified with having non-traditional backgrounds and / or being a
          member of underrepresented minority groups - and am curious about ways
          to offer my availability to another person who might benefit from it.
          Do reach out if you happen to have something to suggest in these
          areas!
        </p>
      </Fade>

      <Fade bottom>
        <p>
          My creative process as a technologist is grounded in active study and
          reflection of topics broadly falling into the realms of geography,
          history, anthropology, ecology and ecospirituality. I read a lot,
          write sometimes, and spend an above average amount of time in the
          quiet presence of trees. I recently gained certification as a{' '}
          <a
            href="https://www.natureandforesttherapy.org/about/the-practice-of-forest-therapy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forest Therapy Guide
          </a>{' '}
          - feel free to ask anything about that 🌲
        </p>
      </Fade>
    </div>
    <div className="about__subtitle--container">
      <Fade left>
        <div className="about__subtitle--item">
          <h2>global</h2>
        </div>
      </Fade>
      <Zoom>
        <div className="about__subtitle--item">
          <WorldlyIcon className="about__worldly-icon" />
        </div>
      </Zoom>
      <Fade right>
        <div className="about__subtitle--item">
          <h2>footprint</h2>
        </div>
      </Fade>
    </div>

    <WorldMap />
  </section>
);

export default About;
