import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <h3 className="header__title">
        <AnchorLink href="#top">stoneages dot me</AnchorLink>
      </h3>
      <nav className="header__nav">
        <AnchorLink offset="50" href="#about">
          About
        </AnchorLink>
        <AnchorLink offset="50" href="#timeline">
          Timeline
        </AnchorLink>
        <AnchorLink offset="50" href="#contact">
          Contact
        </AnchorLink>
      </nav>
    </div>
  </header>
);

export default Header;
