import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import _ from 'lodash';
import { ComposableMap, ZoomableGroup, Geographies, Geography, Markers, Marker } from 'react-simple-maps';
import tooltip from 'wsdm-tooltip';

import worldMapObject from './static/world-50m.json';

class WorldMap extends Component {
  constructor(props) {
    super(props);

    this.countriesLived = ['CAN', 'USA', 'AUS', 'CHN'];
    this.countriesVisited = ['FRA', 'MEX', 'SWE', 'NOR', 'ISL', 'DNK'];
    this.citiesLived = [
      { name: 'Vancouver', coordinates: [-123.120735, 49.282730] },
      { name: 'Toronto', coordinates: [-79.383186, 43.653225] },
      { name: 'Sydney', coordinates: [151.205338, -33.872761] },
      { name: 'Beijing', coordinates: [116.386340, 39.930840] },
      { name: 'San Francisco', coordinates: [-122.419418, 37.774929] },
      { name: 'Portland', coordinates: [-122.681430, 45.516020] }
    ];
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

  /**
   * Show tooltip on hover over a country
   */
  showCountryToolTip = (geography, evt) => {
    if (this.isImportantCountry(geography.id)) {
      this.tip.show(`
        <div class="tooltip-inner">
          ${geography.properties.name}
        </div>
      `);
      this.tip.position({ pageX: evt.pageX, pageY: evt.pageY });
    }
  }

  /**
   * Show tooltip on hover over a city
   */
  showCityToolTip = (marker, evt) => {
    this.tip.show(`
      <div class="tooltip-inner">
        ${marker.name}
      </div>
    `);
    this.tip.position({ pageX: evt.pageX, pageY: evt.pageY });
  }

  hideToolTip = () => {
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
                    onMouseMove={ this.showCountryToolTip }
                    onMouseLeave={ this.hideToolTip }
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

              <Markers>
                {this.citiesLived.map((city, i) => (
                  <Marker
                    className="world-map__marker"
                    tabable={false}
                    key={i}
                    marker={city}
                    onMouseMove={ this.showCityToolTip }
                    onMouseLeave={ this.hideToolTip }
                    style={{
                      default: { fill: "FB97C6", stroke: "#62002E", outline: "none" },
                      hover: { fill: "FB97C6", stroke: "#62002E", outline: "none" },
                      pressed: { fill: "FB97C6", stroke: "#62002E", outline: "none" },
                    }}
                    >
                    <g transform="translate(-12, -12) scale(2)">
                      <path d="M5.019302312642594,0.4654667096328641 l1.3511287981041842,2.502725414919123 l2.895275995937537,0.4460302719657852 c0.2959615462513927,0.049558919107309536 0.373168906143061,0.39647135285847546 0.1672826130986133,0.545148110180404 l-2.058862930444471,2.0071362238460293 l0.45037626603472886,2.7876891997861515 c0.038603679945833934,0.2849637848670292 -0.2830936529361143,0.4708097315194396 -0.4889799459805628,0.3221329741975114 l-2.6250502363167003,-1.2637524372363889 l-2.6121823430014217,1.2761421670132163 c-0.27022575962083684,0.1238972977682736 -0.5404515192416738,-0.1115075679914461 -0.463244159350006,-0.34691243375116637 l0.43750837271945137,-2.800078929562979 l-2.058862930444471,-1.9947464940692021 c-0.21875418635972546,-0.2106254062060649 -0.06433946657638986,-0.5327583804035768 0.19301839972916973,-0.5327583804035768 l2.895275995937537,-0.4708097315194396 l1.338260904788906,-2.502725414919123 c0.12867893315277942,-0.2601843253133743 0.5018478392958406,-0.22301513598289277 0.5790551991875076,0.024779459553654758 z"/>
                    </g>
                  </Marker>
                ))}
              </Markers>

            </ZoomableGroup>
          </ComposableMap>
        </Zoom>

        <Fade bottom>
          <div className="world-map__legend">
            <div className="world-map__legend--cities">
              <span></span>
              <label>cities lived</label>
            </div>
            <div className="world-map__legend--visited">
              <span></span>
              <label>countries visited</label>
            </div>
            <div className="world-map__legend--lived">
              <span></span>
              <label>countries lived</label>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default WorldMap;
