import React from 'react';
import Fade from 'react-reveal/Fade';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import UniversityIcon from './icons/UniversityIcon';
import PaintbrushIcon from './icons/PaintbrushIcon';
import InfinityIcon from './icons/InfinityIcon';
import WorkIcon from './icons/WorkIcon';

import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => (
  <section className="timeline">
    <Fade bottom>
      <div className="timeline__title" id="timeline">
        <h1>timeline</h1>
      </div>
    </Fade>

    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--school"
        date="2010"
        position="left"
        iconStyle={{ background: '#2A2400', color: '#fff' }}
        icon={<UniversityIcon />}
      >
        <p>
          I took my first programming course in <b>Python</b> at the{' '}
          <b>University of Toronto</b>. I enjoyed the learning experience
          immensely and never looked back. Python is still one of my favourite
          languages and the most likely one I am to recommend to total beginners
          today.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--project"
        date="2013-2014"
        position="right"
        iconStyle={{ background: '#2A2400', color: '#fff' }}
        icon={<PaintbrushIcon />}
      >
        <p>
          Upper-year project courses gave me my first taste of working on a
          full-featured software application, particularly learnings regarding
          working in larger teams, development process, and how to approach
          problems before jumping straight into code. With teams of 4-5 others,
          I built <b>two projects</b>: an{' '}
          <a
            href="https://rgq99h.axshare.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            interactive prototype
          </a>{' '}
          for a mobile social networking application, and a{' '}
          <a
            href="http://nysc.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            course registration system
          </a>{' '}
          powered by <b>Ruby on Rails</b> (demo access instructions{' '}
          <a
            href="https://docs.google.com/document/d/1Q6380Ez0Gnur03aisRdjVM6qK8tIydSBZ7LwUfPEXFw"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          ).
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2013-2014"
        position="left"
        iconStyle={{ background: '#2A2400', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <p>
          I worked as a <b>teaching assistant</b> for two intro-level courses in
          the Department of Computer Science: one in <b>Java</b> with a focus on{' '}
          <b>Android development</b>, and one in <b>computational logic</b>.
          Mentoring others was also an enriching learning experience for me and
          one that I always take deeply to heart whenever the opportunity arises
          in and outside of the workplace.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2014"
        position="right"
        iconStyle={{ background: '#2A2400', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <p>
          As a <b>software developer fellow</b> at <b>Myplanet</b>, I and my
          interdisciplinary team worked directly with a local client to develop
          a{' '}
          <a
            href="http://alternativ.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            furniture recommendation site
          </a>{' '}
          from scratch. I was responsible for much of the frontend code and all
          of the backend, written in <b>Python</b> on the <b>Django</b>{' '}
          framework. I enjoyed getting to know our end users and having the
          opportunity to help solve their problems through creative technology.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2014-2015"
        position="left"
        iconStyle={{ background: '#2A2400', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <p>
          I moved to San Francisco to join <b>Marin Software</b> as a{' '}
          <b>software engineer intern</b>, where I worked full-time hours
          alongside other development and test engineers and was challenged to
          learn and grow every day as a professional and as a human being. My
          projects consisted primarily of writing <b>AngularJS</b> apps and
          integrating with the <b>Facebook Ads API</b>.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2015"
        position="right"
        iconStyle={{ background: '#2A2400', color: '#fff' }}
        icon={<UniversityIcon />}
      >
        <p>
          I graduated from the <b>University of Toronto</b> with an{' '}
          <b>HBSc in Computer Science</b>. My senior project was an academic
          literature review titled{' '}
          <a
            href="https://www.academia.edu/37417981/Cross-cultural_perspectives_on_enrollment_persistence_and_diversity_in_computer_science_undergraduate_programs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cross-cultural perspectives on enrollment, persistence, and
            diversity in computer science undergraduate programs
          </a>
          . It was a formalised exploration of some questions that had persisted
          in my brain throughout the course of my studies.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2015 - 2018"
        position="left"
        iconStyle={{ background: '#2A2400', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <p>
          Returning to <b>Marin Software</b> as a full-time{' '}
          <b>software engineer</b>, I joined the front-end team and have been
          working on a variety of features in <b>AngularJS</b> and <b>NodeJS</b>{' '}
          ever since. I've had the opportunity to lead projects both solo and in
          smaller teams, and frequently collaborate with colleagues across 4
          regions of the world.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--project"
        date="2018"
        position="right"
        iconStyle={{ background: '#2A2400', color: '#fff' }}
        icon={<PaintbrushIcon />}
      >
        <p>
          To express my love for learning (human) languages, I built a{' '}
          <b>React</b> app called{' '}
          <a
            href="https://stonecrafter.github.io/world-language-comparator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            World Language Comparator
          </a>{' '}
          to improve the [aspiring-] polyglot experience with a user interface
          for automatically translating from one to many target languages
          simultaneously and in the same view. Let me know how it can be made
          better!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - Present"
        position="left"
        iconStyle={{ background: '#2A2400', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <p>
          I started work with the applications development group at{' '}
          <b>Cognite AS</b> in Oslo, building <b>React</b> apps with{' '}
          <b>styled components</b> and writing a lot of <b>end-to-end tests</b>.
          It's fun deep-diving into a whole new tech stack, and quality is even
          more crucial for our target customers in the heavy asset industry!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: '#2A2400', color: '#fff' }}
        icon={<InfinityIcon />}
      />
    </VerticalTimeline>
  </section>
);

export default Timeline;
