import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('home-page')
export default class HomePage extends LitElement {
  render() {
    return html`<div>HomePage</div>`;
  }
}
