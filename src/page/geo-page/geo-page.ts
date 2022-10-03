import {customElement, property, query, state} from 'lit/decorators.js';
import PageElement from '../abstract/page-element';
import {html, css, nothing} from 'lit';
import styles from './geo-page.scss';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import {CountryTypes} from '../../data/type/country-types';
import Fontawesome from 'lit-fontawesome';

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

  constructor() {
    super({title: 'Geo page'});
  }

  connectedCallback(): void {
    super.connectedCallback();

    // this._map.call(drag);

    // svg.call(drag);
  }

  insertMap() {
    var width = 1000,
      height = 1000;

    var projection = d3
      .geoOrthographic()
      .scale(475)
      .translate([width / 2, height / 2])
      .clipAngle(90)
      .precision(0.1)
      .rotate([0, 0, 0]);

    // var path = d3.geoPath().projection(projection);

    const path: any = d3.geoPath(projection);

    var graticule = d3.geoGraticule();

    let svg = d3
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

    d3.json('src/world-countries.json').then((collection: any) => {
      // var countries = svg
      //   .selectAll('path')
      //   .data(collection.features)
      //   .enter()
      //   .append('path')
      //   .attr('d', path)
      //   .attr('class', 'country')
      //   .attr('id', (d: any) => d.id);

      this.myCountries = svg
        .selectAll('path')
        .data(collection.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('class', 'country')
        .attr('id', (d: any) => d.id)
        .on('click', (event, d) => this.selected(event, d));

      d3.tsv('src/world-temperature.tsv').then((data: any) => {
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

        let legendLabels = svg
          .append('g')
          .attr('transform', 'translate(30, 10)')
          .attr('class', 'y axis')
          .call(legendAxis);

        let temperatures: any = [];
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
              '</span><br/>Temperature : <span style="font-weight:bold;">' +
              temperature +
              '°'
          );
        });
      });
    });
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

    let dragHandler = d3.drag().subject(started).on('drag', dragged);
    dragHandler(svg);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  firstUpdated(): void {}

  selected(e: any, d: any) {
    let countryId = e.path[0].id;
    let countryName = d.properties.name;
    this.callCountryApi(countryName);
    d3.select(this._selected).classed('selected', false);
    d3.select(e.path[0]).classed('selected', true);
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
              <ul>
                <li>
                  <b>Name:</b>
                  ${this.countryInformation.name?.common}
                </li>
                <li>
                  <b>Official Name:</b>
                  ${this.countryInformation.name?.official}
                </li>
                <li>
                  <b>Subregion:</b>
                  ${this.countryInformation.subregion}
                </li>
                <li>
                  <b>Capital City: </b>
                  ${this.countryInformation.capital}
                </li>
                <li>
                  <b>Population: </b>
                  ${this.countryInformation.population}
                </li>
                <li>
                  <b>Flag: </b>
                  ${this.countryInformation.flag}
                </li>
                <li>
                  <b>Borders: </b>
                  ${this.countryInformation.borders?.map(
                    (border, index, arr) => html`<p class="border">
                      ${arr.length - 1 === index ? border : `${border},`}
                    </p>`
                  )}
                </li>
              </ul>
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
      <button @click=${this.insertMap}>Insert Map</button>
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
