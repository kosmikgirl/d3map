import {customElement, query} from 'lit/decorators.js';
import PageElement from '../abstract/page-element';
import {html, css} from 'lit';
import styles from './geo-page.scss';
import * as d3 from 'd3';
import * as topojson from 'topojson';

@customElement('geo-page')
export default class GeoPage extends PageElement {
  static styles = css([styles] as unknown as TemplateStringsArray);

  @query('#map') _map: any;
  @query('#rightbox') _rightbox: any;

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
      console.log(collection);
      var countries = svg
        .selectAll('path')
        .data(collection.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('class', 'country')
        .attr('id', (d: any) => d.id);
      console.log(countries);

      // const handleAsJson = (response: {json: () => any}) => response.json();
      // const handleError = console.error; // or some such;
      // fetch('src/world-temprature.tsv').then(handleAsJson).catch(handleError);

      d3.tsv('src/world-temperature.tsv').then((data: any) => {
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
          .attr('class', function (event: any, d: any) {
            console.log(d);
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
            d3.select('#' + e.country).attr('class', function (d) {
              return 'country temperature-' + quantile(+e.temperature);
            });
          }
        );

        let rightbox = d3.select(this._rightbox);

        countries.on('mouseover', function (event: any, d: any) {
          var temperature = 0;
          for (var i = 0; i < temperatures.length; ++i) {
            if (temperatures[i].id === d.id) {
              temperature = temperatures[i].temperature;
            }
          }
          console.log(event, d, 'd');
          rightbox.html(
            '<div class="box-title"><h3>Température moyenne annuelle</h3></div>' +
              'Pays : <span style="font-weight:bold;">' +
              d.properties.name +
              '</span><br/>Température : <span style="font-weight:bold;">' +
              temperature +
              '°'
          );
        });
      });
    });
    var λ = d3.scaleLinear().domain([0, width]).range([-180, 180]);

    var φ = d3.scaleLinear().domain([0, height]).range([90, -90]);

    // var drag = d3.behavior
    //   .drag()
    //   .origin(function () {
    //     var r = projection.rotate();
    //     return {
    //       x: λ.invert(r[0]),
    //       y: φ.invert(r[1]),
    //     };
    //   })
    //   .on('drag', function () {
    //     projection.rotate([λ(d3.event.x), φ(d3.event.y)]);
    //     svg.selectAll('.country').attr('d', path);

    //     svg.selectAll('.graticule').datum(graticule).attr('d', path);
    //   });

    let drag = d3
      .drag()
      .on('start', d => {
        var r = projection.rotate();
        return {
          x: λ.invert(r[0]),
          y: φ.invert(r[1]),
        };
      })
      .on('drag', (e, d) => {
        projection.rotate([λ(e.x), φ(e.y)]);
        svg.selectAll('.country').attr('d', path);
        svg.selectAll('.graticule').datum(graticule).attr('d', path);
      });

    console.log(drag);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  firstUpdated(): void {}

  render() {
    return html`<div>
      <div id="map" style="width:100%; height:100%;"></div>
      <button @click=${this.insertMap}>Insert Map</button>
      <div id="rightbox" class="box right-box">
        <div class="box-title">
          <h3>Annual average temperature</h3>
        </div>
        <span style="font-style:italic;">Roll over a step </span>
      </div>
    </div>`;
  }
}
