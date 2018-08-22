import React, { Component } from 'react';
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

/**
 * Intro section: animated interactive fun using pixi.js
 */
class Intro extends Component {
  constructor(props) {
    super(props);
    this.pixiContainer = null;
    this.spriteList = [];
    this.app = new Application({ width: window.innerWidth, height: window.innerHeight, backgroundColor: 0xede68a });
    this.canvasHeight = this.app.view.height;
    this.canvasWidth = this.app.view.width;
  }

  /**
   * Bind pixi container to react element
   */
  updatePixiContainer = (element) => {
    this.pixiContainer = element;

    if (this.pixiContainer && this.pixiContainer.children.length <= 0) {
      this.pixiContainer.appendChild(this.app.view);
      this.setup();
    }
  };

  /**
   * Resize canvas when viewport is resized
   */
  onViewportResize = () => {
    // Perform pixi resize
    this.app.renderer.autoResize = true;
    this.app.renderer.resize(window.innerWidth, window.innerHeight);

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
   * Render react element
   */
  render() {
    return <div ref={this.updatePixiContainer} />;
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
    sprite.x = Math.random() * (this.canvasWidth - sprite.width);
    sprite.y = Math.random() * (this.canvasHeight - sprite.height);
    
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
      const isOffTop = globalPosition.y + SPRITE_OFFSET <= 0;
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
        (globalPosition.y - SPRITE_OFFSET) + sprite.vy <= 0 ||
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