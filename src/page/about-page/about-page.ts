import {html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {RouteDataParam} from '../../data/enum';
import PageElement from '../abstract/page-element';
import { css } from 'lit';
import styles from './about-page.scss';

@customElement('about-page')
export default class AboutPage extends PageElement {
  static styles = [ css([styles] as unknown as TemplateStringsArray) ];

  constructor() {
    super({title: 'About'});
  }

  render() {
    return html`<div>
    
      <h2>
        AboutPage ${this.routeData?.[RouteDataParam.ID] || 'no id'}
      </h2>

      <p>About Page loaded</p>
    
    </div>`;
  }

}
