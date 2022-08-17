import {customElement, property, state} from 'lit/decorators.js';
import PageElement from '../abstract/page-element';
import {html, css, nothing} from 'lit';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import styles from './geolocation-page.scss';
import {query} from 'lit/decorators/query.js';
import {zoom} from 'd3';

export type CountryTypes = {
  altSpellings?: Array<String>;
  area?: Number;
  borders?: Array<String>;
  capital?: Array<String>;
  capitalInfo?: any;
  car?: any;
  cca2?: String;
  cca3?: String;
  ccn3?: String;
  cioc?: String;
  coatOfArms?: any;
  continents?: Array<String>;
  currencies?: any;
  demonyms?: any;
  fifa?: String;
  flag?: String;
  flags?: any;
  gini?: any;
  idd?: any;
  independent?: boolean;
  landlocked?: boolean;
  languages?: any;
  latlng?: Array<Number>;
  maps?: any;
  name?: NameTypes;
  population?: Number;
  postalCode?: any;
  region?: String;
  startOfWeek?: String;
  status?: String;
  subregion?: String;
  timezones?: Array<String>;
  tld?: Array<String>;
  translations?: any;
  unMember?: boolean;
};

type NameTypes = {
  common?: String;
  nativeName?: any;
  official?: String;
};

@customElement('geolocation-page')
export default class GeologationPage extends PageElement {
  static styles = [css([styles] as unknown as TemplateStringsArray)];

  constructor() {
    super({title: 'GeolocationPage'});
  }

  @property({type: String})
  apiEndpoint = 'https://restcountries.com/v3.1';
  @property({type: Object})
  countryInformation: CountryTypes = {};
  @property({type: Array})
  countryInfoByCode: any[] = [];

  @state() mapIsRendered: boolean = false;

  @query('.title')
  _title: any;
  @query('.map')
  _map: any;
  @query('.selected')
  _selected: any;
  @query('.char')
  _char: any;
  @query('svg')
  _svg: any;

  connectedCallback() {
    super.connectedCallback();
  }

  updated(changedProperties: any) {
    console.log(changedProperties); // logs previous values
    console.log(this.countryInformation.borders); // logs current value
    console.log(this.mapIsRendered);
  }

  render() {
    return html`<div class="geolocation-container">
      ${this.insertButton()}
      <div class="map">
        <svg width="900px" height="600px"></svg>
      </div>
      ${this.insertCountryCard()}
    </div>`;
  }

  insertButton() {
    return !this.mapIsRendered
      ? html`<button @click=${this.insertMap}>Insert Map</button>`
      : nothing;
  }

  insertCountryCard() {
    return Object.keys(this.countryInformation).length !== 0
      ? html`
          <div class="country-details">
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
        `
      : nothing;
  }

  private insertMap() {
    this.mapIsRendered = true;
    const projection = d3
      .geoMercator()
      .scale(140)
      .translate([900 / 2, 600 / 1.4]);
    const path: any = d3.geoPath(projection);

    const scale = 1;
    let mouseClicked = false;

    let rotated = 90;

    let initX: number;

    let tooltip = d3
      .select(this._map)
      .append('div')
      .attr('class', 'tooltip hidden');

    const svg = d3
      .select(this._svg)
      .on('mousedown', e => {
        e.preventDefault();
        if (scale !== 1) return;
        initX = d3.pointer(this)[0];
        mouseClicked = false;
      })
      .on('mouseup', e => {
        if (scale !== 1) return;
        rotated =
          rotated + ((d3.pointer(this)[0] - initX) * 360) / (scale * 900);
      })
      .call(zoom);

    const g = svg.append('g');

    d3.json(
      'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
    ).then((data: any) => {
      const countries: any = topojson.feature(data, data.objects.countries);
      g.selectAll('path')
        .data(countries.features)
        .enter()
        .append('path')
        .attr('class', 'country')
        .attr('name', (d: any) => d.properties.name)
        .attr('id', (d: any) => d.id)
        .on('click', event => this.selected(event))
        .on('mousemove', showTooltip)
        .on('mouseout', (d, i) => tooltip.classed('hidden', true))
        .attr('d', path);
    });

    const showTooltip = (d: any) => {
      var offsetL = this._map.offsetLeft + 10;
      var offsetT = this._map.offsetTop + 10;

      let label = d.path[0].__data__.properties.name;
      let mouse = d3.pointer(d);

      tooltip
        .classed('hidden', false)
        .attr(
          'style',
          'left:' +
            (mouse[0] + offsetL) +
            'px;top:' +
            (mouse[1] + offsetT) +
            'px'
        )
        .html(label);
    };
  }

  private selected(event: any) {
    const countryName = event.path[0].__data__.properties.name;
    this.callCountryApi(countryName);
    d3.select(this._selected).classed('selected', false);
    d3.select(event.path[0]).classed('selected', true);
  }

  private callCountryApi(name: String) {
    fetch(`${this.apiEndpoint}/name/${name}`)
      .then(res => res.json())
      .then(data => (this.countryInformation = data[0]))
      .catch(err => console.log(err));
  }

  // private insertChart() {
  //   const data = [4, 8, 15, 50, 23, 42];

  //   const div = d3.create("div")
  //   .style("font", "10px sans-serif")
  //   .style("text-align", "right")
  //   .style("color", "white");

  //   div.selectAll("div")
  //   .data(data)
  //   .join("div")
  //     .style("background", "steelblue")
  //     .style("padding", "3px")
  //     .style("margin", "1px")
  //     .style("width", d => `${d * 10}px`)
  //     .text(d => d);

  //   console.log(div.node())
  //   return div.node();
  // }
}
