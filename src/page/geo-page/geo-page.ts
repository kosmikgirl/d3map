import {customElement} from 'lit/decorators.js';
import PageElement from '../abstract/page-element';
import {html, css} from 'lit';
import styles from './geo-page.scss';
import * as d3 from 'd3';
import * as topojson from 'topojson';

@customElement('geo-page')
export default class GeoPage extends PageElement {
  static styles = css([styles] as unknown as TemplateStringsArray);

  constructor() {
    super({title: 'Geo page'});
  }

  connectedCallback(): void {
    super.connectedCallback();
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

    var svg = d3
      .select('#map')
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

    d3.json('world-countries.json').then((collection: any) => {
      var countries = svg
        .selectAll('path')
        .data(collection.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('class', 'country')
        .attr('id', (d: any) => d.id);
    });

    d3.tsv('world-temprature.tsv').then((data: any) => {
      // 60 is the number of class in temperature.css

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
        .attr('class', function (d) {
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

      let temperatures = [];
      data.forEach(
        (e: {country: string; temperature: string | number}, i: any) => {
          temperatures.push({id: e.country, temperature: e.temperature});
          d3.select('#' + e.country).attr('class', function (d) {
            return 'country temperature-' + quantile(+e.temperature);
          });
        }
      );
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  firstUpdated(): void {}

  render() {
    return html`<div>
      <div id="map" style="width:100%; height:100%;"></div>
      <div id="rightbox" class="box right-box">
        <div class="box-title">
          <h3>Annual average temperature</h3>
        </div>
        <span style="font-style:italic;">Roll over a step </span>
      </div>
    </div>`;
  }
}
