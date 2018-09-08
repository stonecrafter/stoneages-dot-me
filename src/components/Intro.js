import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typing from 'react-typing-animation';
import * as PIXI from 'pixi.js';

import mario from '../images/icons/mario.svg';

// Alias pixi methods
const Application = PIXI.Application,
      loader = PIXI.loader,
      resources = PIXI.loader.resources,
      Sprite = PIXI.Sprite;

// Sprites are anchored in the middle, at 25 x 25,
// thus there is a 25px offset in all 4 directions from the anchor point
const SPRITE_OFFSET = 25;

// The header is 50px, so we will consider that to be the top border of the canvas
const HEADER_HEIGHT_OFFSET = 50;

/**
 * Intro section: animated interactive fun using pixi.js
 */
class Intro extends Component {
  constructor(props) {
    super(props);
    this.pixiContainer = null;
    this.spriteList = [];
    this.app = new Application({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      backgroundColor: 0xede68a
    });
    this.canvasHeight = this.app.view.height;
    this.canvasWidth = this.app.view.width;

    this.state = { typingFinished: false };
  }

  /**
   * Bind pixi container to react element
   */
  updatePixiContainer = (element) => {
    this.pixiContainer = element;

    if (this.pixiContainer && this.pixiContainer.children.length <= 0) {
      this.pixiContainer.appendChild(this.app.view);
      this.setup();
      // Update the viewport size after component has rendered in case we need to adjust for scrollbar
      // Don't think this can be done before rendering
      this.onViewportResize();
    }
  };

  /**
   * Resize canvas when viewport is resized
   */
  onViewportResize = () => {
    // Perform pixi resize
    this.app.renderer.autoResize = true;
    // Height and width of viewport not including any scroll bars
    this.app.renderer.resize(document.documentElement.clientWidth, document.documentElement.clientHeight);

    // Update references
    this.canvasHeight = this.app.view.height;
    this.canvasWidth = this.app.view.width;
  }

  /**
   * Register event listener for when viewport is resized
   */
  componentDidMount = () => {
    window.addEventListener('resize', this.onViewportResize);
  }

  /**
   * Deregister event listener
   */
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onViewportResize);
  }

  /**
   * Update state after initial typing is finished, used to hide the
   * backspaced words that are only shown during typing and not after
   */
  onFinishedTyping = () => {
    this.setState({ typingFinished: true });
  }

  /**
   * Render react element
   */
  render() {
    return (
      <div id="top" className="intro">
        <div className="intro__canvas" ref={this.updatePixiContainer}></div>
        <div className="intro__title">
          <Typing speed={75} onFinishedTyping={this.onFinishedTyping}>
            <h1>
              <span>k</span>
              <span>i</span>
              <span>r</span>
              <span>i</span>
              <span>e</span>
              <span>n</span>
              &nbsp;
              <span>e</span>
              <span>y</span>
              <span>m</span>
              <span>a</span>
            </h1>
              {
                !this.state.typingFinished &&
                <div className="intro__title--temp">
                  <h2>writer</h2>
                  <Typing.Reset count={1} delay={500} />
                  <h2>global citizen</h2>
                  <Typing.Reset count={1} delay={500} />
                </div>
              }
            <h2>front end developer</h2>
          </Typing>
        </div>
        <AnchorLink offset="50" href="#about" className="intro__arrow"></AnchorLink>
      </div> 
    );
  }

  //////////
  // PIXI FUNCTIONS
  // THESE ARE INDEPENDENT OF REACT
  //////////

  /**
   * Load images
   */
  setup = () => {
    loader
      // Add all the images
      .add('mario', mario)
      // Load them
      .load(this.initAllSprites);
  };

  /**
   * Set up initial image display properties
   */
  initAllSprites = () => {
    // Create all the sprites
    const mario = new Sprite(resources['mario'].texture);

    // Put them into an array
    this.spriteList = [mario];

    // Iterate through sprites and randomise their starting position, rotation, and direction
    for (const sprite of this.spriteList) {
      this.initSprite(sprite);
    }

    // Set up animation loop
    this.app.ticker.add(delta => this.animationLoop(delta));
  };

  /**
   * Initialise a single sprite
   */
  initSprite = (sprite) => {
    // Set height and width
    sprite.height = 50;
    sprite.width = 50;
    
    // Starting position
    const minX = sprite.width;
    const minY = sprite.height + HEADER_HEIGHT_OFFSET;
    sprite.x = Math.random() * (this.canvasWidth - minX) + minX;
    sprite.y = Math.random() * (this.canvasHeight - minY) + minY;
    
    // Starting rotation, anchored in the center of the image
    sprite.anchor.set(0.5, 0.5);
    sprite.rotation = Math.random() * 2 * Math.PI;
    
    // Starting velocity - random between -3 and +3
    sprite.vx = (Math.random() * 6) - 3;
    sprite.vy = (Math.random() * 6) - 3;
    
    // Fade out a little by default
    sprite.alpha = 0.5;
    
    // Sprite is interactive
    sprite.interactive = true;
    
    // Show hand cursor when hovering over
    sprite.buttonMode = true;
    
    // Event listener for both touch and mouse
    sprite.on('pointerdown', this.onDragStart);
    sprite.on('pointerup', this.onDragEnd)
    sprite.on('pointerupoutside', this.onDragEnd)
    sprite.on('pointermove', this.onDragMove);
    sprite.on('pointerover', this.onMouseOver);
    sprite.on('pointerout', this.onMouseOut);
    
    // Add sprite to the canvas
    this.app.stage.addChild(sprite);
  }

  /**
   * This controls the animations
   * Any code in here will update 60 times per second by default
   */
  animationLoop = (delta) => {
    for (const sprite of this.spriteList) {
      const globalPosition = sprite.getGlobalPosition();

      // If sprite has moved off the canvas for whatever reason
      // (ie. the user dragged it off), let's put it back
      // Don't do this while drag is still occurring
      const isOffLeft = globalPosition.x + SPRITE_OFFSET <= 0;
      const isOffRight = globalPosition.x - SPRITE_OFFSET >= this.canvasWidth;
      const isOffTop = globalPosition.y + SPRITE_OFFSET <= HEADER_HEIGHT_OFFSET;
      const isOffBottom = globalPosition.y - SPRITE_OFFSET >= this.canvasHeight;

      if (!sprite.dragging && (isOffLeft || isOffRight || isOffTop || isOffBottom)) {
        this.initSprite(sprite);
      }

      // If sprite is hitting the canvas boundary, give it a new movement direction
      if (
        (globalPosition.x - SPRITE_OFFSET) + sprite.vx <= 0 ||
        (globalPosition.x + SPRITE_OFFSET) + sprite.vx >= this.canvasWidth
      ) {
        sprite.vx = -(sprite.vx);
      } else if (
        (globalPosition.y - SPRITE_OFFSET) + sprite.vy <= HEADER_HEIGHT_OFFSET ||
        (globalPosition.y + SPRITE_OFFSET) + sprite.vy >= this.canvasHeight
      ) {
        sprite.vy = -(sprite.vy);
      }

      // Apply the velocity to the position to generate movement
      // Do not move when mouse interaction is occurring
      if (!sprite.isMouseOver) {
        sprite.x += sprite.vx + delta;
        sprite.y += sprite.vy + delta;
      }
    }
  }

  //////////
  // EVENT HANDLERS
  // DO NOT USE ARROW FUNCTION
  // this REFERS TO THE SPRITE OBJECT
  //////////

  /**
   * When hover over on a sprite
   */
  onMouseOver = function () {
    this.alpha = 1;
    this.isMouseOver = true;
  }

  /**
   * When ceasing to hover over on a sprite
   */
  onMouseOut = function () {
    this.alpha = 0.5;
    this.isMouseOver = false;
  }

  /**
   * When mouse down on a sprite
   */
  onDragStart = function (event) {
    this.data = event.data;
    this.dragging = true;
  }

  /**
   * When mouse up on a sprite
   */
  onDragEnd = function () {
    this.dragging = false;
    this.data = null;
  }

  /**
   * When dragging on a sprite
   */
  onDragMove = function () {
    if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.parent);
      this.x = newPosition.x;
      this.y = newPosition.y;
    }
  }
}

export default Intro;