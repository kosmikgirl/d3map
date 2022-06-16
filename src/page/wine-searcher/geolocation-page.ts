import {customElement, property} from 'lit/decorators.js';
import PageElement from '../abstract/page-element';
import {html, css} from 'lit';
import * as d3 from "d3";
import styles from './geolocation-page.scss';
import {query} from 'lit/decorators/query.js';

@customElement('geolocation-page')
export default class GeologationPage extends PageElement {
  static styles = [ css([styles] as unknown as TemplateStringsArray) ];

  constructor() {
    super({title: 'GeolocationPage'});
  }

  @property({type: String})
  apiEndpoint = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

  @query('.title')
  _title: any;

  connectedCallback() {
    super.connectedCallback();
    // const options = {
    //   method: 'GET',
    //   headers: {
    //   'X-RapidAPI-Key': '3f890618fcmsh44f98769ab0cd63p1e1551jsn9ec7a3c3c434',
    //   'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    //   }
    // }
    // fetch(this.apiEndpoint, options)
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err))

  }


  render() {
    return html`<div>
    
      <h1 class="title">Geolocation Page</h1>
      <button @click=${this.clickHandler}>Change color</button>
    
    </div>`;
  }

  private clickHandler(){
    console.log(d3);
    console.log(this._title);
    d3.select(this._title).style('color', 'blue');
  }


}
