import {css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import PageElement from '../abstract/page-element';
import styles from './not-found-page.scss';

@customElement('not-found-page')
export default class NotFoundPage extends PageElement {
  static styles = [css([styles] as unknown as TemplateStringsArray)];

  constructor() {
    super({title: 'Not found'});
  }

  render() {
    return html`<div class="notfound-container">
      <h2 class="not-found">Not Found</h2>
    </div>`;
  }
}
