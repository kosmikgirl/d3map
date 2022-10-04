import {customElement, property, state} from 'lit/decorators.js';
import {pointer, select, Selection} from 'd3-selection';
import PageElement from '../abstract/page-element';
import {html, css, nothing} from 'lit';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import styles from './geolocation-page.scss';
import {query} from 'lit/decorators/query.js';
import {D3DragEvent, zoom} from 'd3';
import {drag} from 'd3-drag';
import Fontawesome from 'lit-fontawesome';
import {CountryTypes} from '../../data/type/country-types';

@customElement('geolocation-page')
export default class GeologationPage extends PageElement {
  static styles = [
    Fontawesome,
    css([styles] as ReadonlyArray<string> as TemplateStringsArray),
  ];

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
  @state() isCardVisible: boolean = false;

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
  @query('.canvas')
  _canvas: any;

  connectedCallback() {
    super.connectedCallback();
  }

  updated(changedProperties: any) {
    console.log(changedProperties); // logs previous values
    console.log(this.countryInformation.borders); // logs current value
    console.log(this.mapIsRendered);

    // const svg = select<SVGAElement, unknown>(this._svg);
    // const _drag = drag<SVGSVGElement, unknown>().on('drag', this.dragged);
    // console.log(svg, _drag);
    // svg.call(_drag);
  }

  render() {
    return html`<div class="geolocation-container">
      ${this.insertButton()}
      <div class="map">
        <svg width="900px" height="700px"></svg>
        <!-- <div id="content">
          <canvas width="1000" height="1000" class="canvas"></canvas>
        </div> -->
      </div>
      ${this.isCardVisible ? this.insertCountryCard() : nothing}
    </div>`;
  }

  insertButton() {
    return !this.mapIsRendered
      ? html`<button class="geomap-button" @click=${this.insertMap}>
          Insert Map
        </button>`
      : nothing;
  }

  insertCountryCard() {
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
              </ul>
            </div>
          </div>
        `
      : nothing;
  }

  private handleCloseCard() {
    this.isCardVisible = false;
  }

  // private insertNewMap() {
  //   this.mapIsRendered = true;
  //   let geojson: any = {};
  //   this.mapIsRendered = true;

  //   let context = d3.select(this._canvas).node().getContext('2d');

  //   let projection = d3.geoOrthographic().scale(300);

  //   let geoGenerator = d3
  //     .geoPath()
  //     .projection(projection)
  //     .pointRadius(4)
  //     .context(context);

  //   let yaw = 300;

  //   d3.json(
  //     'https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json'
  //   ).then(function (json: any) {
  //     geojson = json;
  //     console.log(geojson);
  //     window.setInterval(update, 100);
  //   });

  //   d3.json(
  //     'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
  //   ).then((data: any) => {
  //     const countries: any = topojson.feature(data, data.objects.countries);
  //     console.log(countries);

  //     // g.selectAll('path')
  //     //   .data(countries.features)
  //     //   .enter()
  //     //   .append('path')
  //     //   .attr('class', 'country')
  //     //   .attr('name', (d: any) => d.properties.name)
  //     //   .attr('id', (d: any) => d.id)
  //     //   .on('click', event => this.selected(event))
  //     //   .on('mousemove', showTooltip)
  //     //   .on('mouseout', (d, i) => tooltip.classed('hidden', true))
  //     //   .attr('d', path);
  //   });

  //   function update() {
  //     projection.rotate([yaw, -45]);

  //     context.clearRect(0, 0, 800, 600);

  //     context.lineWidth = 0.5;
  //     context.strokeStyle = '#000';

  //     context.beginPath();
  //     geoGenerator({type: 'FeatureCollection', features: geojson.features});
  //     context.stroke();

  //     // Graticule
  //     let graticule = d3.geoGraticule();
  //     context.beginPath();
  //     context.strokeStyle = '#ccc';
  //     geoGenerator(graticule());
  //     context.stroke();

  //     yaw -= 0.2;
  //   }
  // }

  get projectionGetter() {
    return d3
      .geoOrthographic()
      .scale(300)
      .translate([900 / 2, 600 / 1.4]);
  }

  private insertMap() {
    this.mapIsRendered = true;

    // const projection = d3
    //   .geoOrthographic()
    //   .scale(300)
    //   .translate([900 / 2, 600 / 1.4]);

    const path: any = d3.geoPath(this.projectionGetter);

    const scale = 1;
    let mouseClicked = false;

    let rotated = 90;

    let initX: number;

    let tooltip = d3
      .select(this._map)
      .append('div')
      .attr('class', 'tooltip hidden');

    // let graticule = d3.geoGraticule();
    // path(graticule());

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

      let test = g
        .selectAll('path')
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

      // test.datum(graticule).attr('class', 'back-line').attr('d', path);
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
    console.log(countryName);
    this.callCountryApi(countryName);
    d3.select(this._selected).classed('selected', false);
    d3.select(event.path[0]).classed('selected', true);
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

  private dragged(event: D3DragEvent<SVGSVGElement, undefined, HTMLElement>) {
    const sensitivity = 75;
    const rotate = this.projectionGetter.rotate();
    const k = sensitivity / this.projectionGetter.scale();

    this.projectionGetter.rotate([
      rotate[0] + event.dx * k,
      rotate[1] - event.dy * k,
    ]);
  }
}
