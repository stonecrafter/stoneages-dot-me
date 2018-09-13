import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import _ from 'lodash';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from 'react-simple-maps';

import worldMapObject from './static/world-50m.json';

class WorldMap extends Component {
  constructor(props) {
    super(props);

    this.countriesLived = ['CAN', 'USA', 'AUS', 'CHN'];
    this.countriesVisited = ['FRA', 'MEX', 'SWE', 'NOR', 'ISL', 'DNK'];
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
    return this.isCountryLived() || this.isCountryVisited();
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
