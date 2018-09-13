import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import _ from 'lodash';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from 'react-simple-maps';
import tooltip from 'wsdm-tooltip';

import worldMapObject from './static/world-50m.json';

class WorldMap extends Component {
  constructor(props) {
    super(props);

    this.countriesLived = ['CAN', 'USA', 'AUS', 'CHN'];
    this.countriesVisited = ['FRA', 'MEX', 'SWE', 'NOR', 'ISL', 'DNK'];
  }

  /**
   * Initialise the tooltip
   */
  componentDidMount = () => {
    // Styles for the tooltip arrow are defined in base
    this.tip = tooltip({
      styles: {
        color: '#20032b',
        padding: '.5rem 1rem',
        display: 'none',
        'border-radius': '.3rem',
        'background-color': '#baa5c1',
        'z-index': 1000,
        'box-shadow': '0 .2rem .8rem #20032b',
        'text-align': 'center',
        'pointer-events': 'none',
        'font-size': '1.2rem'
      }
    });
    this.tip.create();
  }

  handleMouseMove = (geography, evt) => {
    if (this.isImportantCountry(geography.id)) {
      this.tip.show(`
        <div class="tooltip-inner">
          ${geography.properties.name}
        </div>
      `);
      this.tip.position({ pageX: evt.pageX, pageY: evt.pageY });
    }
  }

  handleMouseLeave = () => {
    this.tip.hide();
  }

  /**
   * Was a country lived in
   */
  isCountryLived = (countryCode) => {
    return _.includes(this.countriesLived, countryCode);
  }

  /**
   * Was a country visited
   */
  isCountryVisited = (countryCode) => {
    return _.includes(this.countriesVisited, countryCode);
  }

  /**
   * Was a country lived in or visited
   * I'll come up with a better name later....
   */
  isImportantCountry = (countryCode) => {
    return this.isCountryLived(countryCode) || this.isCountryVisited(countryCode);
  }

  /**
   * Get the fill colour based on the country code
   */
  getFillColour = (countryCode) => {
    let colour = '#4C5100';
    if (this.isCountryLived(countryCode)) {
      colour = '#3A024E';
    } else if (this.isCountryVisited(countryCode)) {
      colour = '#5B0E77';
    }

    return colour;
  }

  render() {
    return (
      <div className="world-map">
        <Zoom>
          <ComposableMap
            // These are default configs from documentation examples
            // Kept them because it looks better with than without
            projectionConfig={{
              scale: 205,
              rotation: [-11,0,0],
            }}
            width={980}
            height={551}
            style={{
              width: "100%",
              height: "auto",
            }}
            >
            <ZoomableGroup center={[0,20]} disablePanning>
              <Geographies geography={ worldMapObject }>
                {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                  // No antarctica.
                  <Geography
                    key={ `geography-${i}` }
                    cacheId={ `geography-${i}` }
                    geography={ geography }
                    projection={ projection }
                    onMouseMove={ this.handleMouseMove }
                    onMouseLeave={ this.handleMouseLeave }
                    style={{
                      // Colour behaviour should be the same for all 3 states
                      default: {
                        fill: this.getFillColour(geography.id),
                        stroke: this.getFillColour(geography.id),
                        outline: "none",
                      },
                      hover: {
                        fill: this.getFillColour(geography.id),
                        stroke: this.getFillColour(geography.id),
                        outline: "none",
                      },
                      pressed: {
                        fill: this.getFillColour(geography.id),
                        stroke: this.getFillColour(geography.id),
                        outline: "none",
                      },
                    }}
                  />
                ))}
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </Zoom>
      </div>
    );
  }
}

export default WorldMap;
