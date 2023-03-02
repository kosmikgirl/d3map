import * as d3 from 'd3';
import {css, html, nothing} from 'lit';
import Fontawesome from 'lit-fontawesome';
import {customElement, property, query, state} from 'lit/decorators.js';
import '../../component/country-card/country-card';
import {CountryTypes} from '../../data/type/country-types';
import PageElement from '../abstract/page-element';
import styles from './geo-page.scss';
@customElement('geo-page')
export default class GeoPage extends PageElement {
  // static styles = css([styles] as unknown as TemplateStringsArray);

  static styles = [
    Fontawesome,
    css([styles] as ReadonlyArray<string> as TemplateStringsArray),
  ];

  @property({type: String})
  apiEndpoint = 'https://restcountries.com/v3.1';

  @property({type: Object})
  countryInformation: CountryTypes = {};

  @query('#map') _map: any;
  @query('#rightbox') _rightbox: any;
  @query('.country') _country: any;
  @query('.graticule') _graticule: any;

  @query('.selected')
  _selected: any;

  @state() myCountries: any;
  @state() isCardVisible: boolean = false;
  @state() isMapRendered: boolean = false;

  constructor() {
    super({title: 'Geo page'});
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  private async insertMap() {
    this.isMapRendered = true;
    var width = 1000,
      height = 1000;

    // Create the map projection
    var projection = d3
      .geoOrthographic()
      .scale(475)
      .translate([width / 2, height / 2])
      .clipAngle(90)
      .precision(0.1)
      .rotate([0, 0, 0]);

    // Store the geoPath in a constant
    const path: any = d3.geoPath(projection);

    // Create the geographic graticule
    var graticule = d3.geoGraticule();

    // Add attributes to selected element in the DOM
    let svg: d3.Selection<any, unknown, null, undefined> = d3
      .select(this._map)
      .append('svg')
      .attr('id', 'world')
      .attr('width', width)
      .attr('height', height);

    // Append all meridians and parallels
    svg
      .append('path')
      .datum(graticule)
      .attr('class', 'graticule')
      .attr('d', path);

    // Create worldwide map with paths in json file
    d3.json('/world-countries.json').then((collection: any) => {
      this.myCountries = svg
        .selectAll('path')
        .data(collection.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('class', 'country')
        .attr('id', (d: any) => d.id)
        .on('click', (event, d) => this.selected(event, d));

      // Append the countries with the average temperatures
      d3.tsv('/world-temperature.tsv').then((data: any) => {
        var quantile = d3
          .scaleQuantile()
          .domain([
            d3.min(data, function (e: any) {
              return +e.temperature;
            }),
            d3.max(data, function (e: any) {
              return +e.temperature;
            }),
          ])
          .range(d3.range(60));

        var legend = svg
          .append('g')
          .attr('transform', 'translate(40, 10)')
          .attr('id', 'legend');

        // Create side colorbar
        legend
          .selectAll('.colorbar')
          .data(d3.range(60))
          .enter()
          .append('svg:rect')
          .attr('y', function (d) {
            return d * 5 + 'px';
          })
          .attr('height', '5px')
          .attr('width', '20px')
          .attr('x', '0px')
          .attr('class', function (event: any, d: any) {
            return 'temperature-' + d;
          });

        // Create color scale
        let legendScale = d3
          .scaleLinear()
          .domain([
            Number(
              d3.min(data, function (e: any) {
                return +e.temperature;
              })
            ),
            Number(
              d3.max(data, function (e: any) {
                return +e.temperature;
              })
            ),
          ])
          .range([0, 60 * 5]);

        let legendAxis = d3.axisLeft(legendScale);

        // Legend labels for the color sidebar
        let legendLabels = svg
          .append('g')
          .attr('transform', 'translate(30, 10)')
          .attr('class', 'y axis')
          .call(legendAxis);

        let temperatures: any = [];

        // Add average temperatures to each country
        data.forEach(
          (e: {country: string; temperature: string | number}, i: any) => {
            temperatures.push({id: e.country, temperature: e.temperature});
            const selectedCountry = this.renderRoot.querySelector(
              '#' + e.country
            );
            d3.select(selectedCountry).attr('class', function (d) {
              return 'country temperature-' + quantile(+e.temperature);
            });
          }
        );

        let rightbox = d3.select(this._rightbox);

        // Show the average temperatures on hover each country
        this.myCountries.on('mouseover', function (event: any, d: any) {
          var temperature = 0;
          for (var i = 0; i < temperatures.length; ++i) {
            if (temperatures[i].id === d.id) {
              temperature = temperatures[i].temperature;
            }
          }
          rightbox.html(
            '<div class="box-title"><h3>Annual average temperature</h3></div>' +
              'Country : <span style="font-weight:bold;">' +
              d.properties.name +
              '</span><br/>Average Temperature : <span style="font-weight:bold;">' +
              temperature +
              '°'
          );
        });
      });
    });

    // Create axisY and axisX for the dragged function
    var λ = d3.scaleLinear().domain([0, width]).range([-180, 180]);
    var φ = d3.scaleLinear().domain([0, height]).range([90, -90]);

    let started = () => {
      var r = projection.rotate();
      return {
        x: λ.invert(r[0]),
        y: φ.invert(r[1]),
      };
    };

    let dragged = (event: any) => {
      let xEvent = event.x; // d3.event.x
      let yEvent = event.y; // d3.event.y
      projection.rotate([λ(xEvent), φ(yEvent)]);

      svg.selectAll('.country').attr('d', path);
      svg.selectAll('.graticule').datum(graticule).attr('d', path);
    };

    // Function to drag and move the geopath
    let dragHandler = d3.drag().subject(started).on('drag', dragged);
    dragHandler(svg);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  private selected(e: any, d: any) {
    let countryName = d.properties.name;
    this.callCountryApi(countryName);
    d3.select(this._selected).classed('selected', false);
    d3.select(e).classed('selected', true);
  }

  private callCountryApi(name: String) {
    fetch(`${this.apiEndpoint}/name/${name}`)
      .then(res => res.json())
      .then(data => {
        this.countryInformation = data[0];
        this.isCardVisible = true;
      })
      .catch(err => console.log(err));
  }

  private handleCloseCard() {
    this.isCardVisible = false;
  }

  private insertCountryCard() {
    return Object.keys(this.countryInformation).length !== 0
      ? html`
          <div class="country-details">
            <div class="country-details-box">
              <i class="fas fa-times" @click=${this.handleCloseCard}></i>
              <country-card
                .countryInformation=${this.countryInformation}
              ></country-card>
            </div>
          </div>
        `
      : nothing;
  }

  protected updated(
    _changedProperties: Map<string | number | symbol, unknown>
  ): void {
    console.log(this.countryInformation);
  }

  render() {
    return html`<div class="geopage-container">
      <div id="map" style="width:100%; height:100%;"></div>
      ${!this.isMapRendered
        ? html` <button @click=${this.insertMap}>Insert Map</button>`
        : nothing}

      <div id="rightbox" class="box right-box">
        <div class="box-title">
          <h3>Annual average temperature</h3>
        </div>
        <span style="font-style:italic;">Roll over a step </span>
      </div>
      ${this.isCardVisible ? this.insertCountryCard() : nothing}
    </div>`;
  }
}
