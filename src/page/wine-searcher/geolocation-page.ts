import {customElement, property} from 'lit/decorators.js';
import PageElement from '../abstract/page-element';
import {html, css} from 'lit';
import * as d3 from "d3";
import * as topojson from "topojson";
import styles from './geolocation-page.scss';
import {query} from 'lit/decorators/query.js';
import data from '../../data.json';
import { zoom } from 'd3';

@customElement('geolocation-page')
export default class GeologationPage extends PageElement {
  static styles = [ css([styles] as unknown as TemplateStringsArray) ];

  constructor() {
    super({title: 'GeolocationPage'});
  }

  @property({type: String})
  apiEndpoint = 'http://universities.hipolabs.com/search';

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
    // const options = {
    //   method: 'GET',
    //   headers: {
    //   'X-RapidAPI-Key': '3f890618fcmsh44f98769ab0cd63p1e1551jsn9ec7a3c3c434',
    //   'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    //   }
    // }
    fetch(this.apiEndpoint)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))



  }


  render() {
    return html`<div>
    
      <h1 class="title">Geolocation Page</h1>
      <button @click=${this.clickHandler}>Change color</button>
      <button @click=${this.insertMap}>Insert Map</button>

      ${this.insertChart()}

      <div class="map">
        <svg width='900px' height='600px'></svg>
      </div>
    
    </div>`;
  }

  private insertMap() {

    const projection = d3.geoMercator().scale(140).translate([900 / 2, 600 / 1.4]);
    const path: any = d3.geoPath(projection);

    const scale = 1;
    let mouseClicked = false;

    let rotated = 90;

    let initX: number;

    let tooltip = d3.select(this._map)
    .append("div")
    .attr("class", "tooltip hidden");

    const svg = d3.select(this._svg).on('mousedown', (e) => {
      e.preventDefault();
      if (scale !== 1) return;
      initX = d3.pointer(this)[0];
      mouseClicked = false;
    })
    .on('mouseup', (e) => {
      if (scale !== 1) return;
      rotated = rotated + ((d3.pointer(this)[0] - initX) * 360 / (scale * 900 ))
    }).call(zoom);

    const g = svg.append('g');

    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then( (data: any) => {
      const countries: any = topojson.feature(data, data.objects.countries);
      g.selectAll('path')
      .data(countries.features)
      .enter()
      .append('path')
      .attr('class', 'country')
      .attr('name', (d: any) => d.properties.name )
      .attr('id', (d: any) => d.id)
      .on('click', (event) => this.selected(event))
      .on('mousemove', showTooltip)
      .on('mouseout', (d, i) => tooltip.classed('hidden', true))
      .attr('d', path);

    }) 

    const showTooltip = (d: any) => {
      var offsetL = this._map.offsetLeft+10;
      var offsetT = this._map.offsetTop+10;

      let label = d.path[0].__data__.properties.name;
      let mouse = d3.pointer(d);

      tooltip.classed("hidden", false)
        .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
        .html(label);
    }

  }


  private selected(event: any) {
    d3.select(this._selected).classed('selected', false);
    d3.select(event.path[0]).classed('selected', true);
  }


  private insertChart() {
    const data = [4, 8, 15, 50, 23, 42];
    
    const div = d3.create("div")
    .style("font", "10px sans-serif")
    .style("text-align", "right")
    .style("color", "white");

    div.selectAll("div")
    .data(data) 
    .join("div")
      .style("background", "steelblue")
      .style("padding", "3px")
      .style("margin", "1px")
      .style("width", d => `${d * 10}px`)
      .text(d => d);

    console.log(div.node())
    return div.node();
  }



  private clickHandler(){
    // console.log(d3);
    console.log(this._title);
    d3.select(this._title).style('color', 'blue');

  }

  // private buildMap(){
  //   const context = this.renderRoot.context2d(33,55);
  // }
  

  // private keyframes() {
  //   const keyframes = [];
  //   let ka, ab, kb, bb;
  //   for ([[ka, ab], [kb, bb]] of d3.pairs(datevalues)) {
  //     for (let i = 0; i < 10; ++i) {
  //       const t = i / 10;
  //       keyframes.push([
  //         new Date(ka * (1 - t) + kb * t),
  //         this.rank(name => (a.get(name) || 0) * (1 - t) + (b.get(name) || 0) * t)
  //       ]);
  //     }
  //   }
  //   keyframes.push([new Date(kb), rank(name => b.get(name) || 0)]);
  //   return keyframes;
  // }
  

  // private rank(value: any) {
  //   const names = new Set(data.map(d => d.name));
  //   let info = Array.from(names, name => ({name, value: value(name)}));
  //   info.sort((a, b) => d3.descending(a.value, b.value));
  //   for (let i = 0; i < info.length; ++i) info[i].rank = Math.min(12, i);
    
  //   return info;
  // }

  // private bars(svg: any){}
  // private axis(svg: any){}
  // private labels(svg: any){}
  // private ticker(svg: any){}
  



}
