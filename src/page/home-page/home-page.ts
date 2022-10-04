import {html, PropertyValues} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {msg as localize, localized} from '@lit/localize/lit-localize';
import PageElement from '../abstract/page-element';
import {css} from 'lit';
import styles from './home-page.scss';

@localized()
@customElement('home-page')
export default class HomePage extends PageElement {
  static styles = [css([styles] as unknown as TemplateStringsArray)];

  constructor() {
    super({title: 'Home'});
  }

  render() {
    return html`<div class="homepage-container">
      <h2>Personal project made with Lit.dev</h2>

      <p>
        This small project is made using
        <a href="https://lit.dev/" target="_blank">Lit.dev,</a> and
        <a href="https://d3js.org/" target="_blank">d3.js</a> libraries.
      </p>

      <p>
        Lit is a simple library for building fast, lightweight web components.
        At Lit's core is a boilerplate-killing component base class that
        provides reactive state, scoped styles, and a declarative template
        system that's tiny, fast and expressive.
      </p>

      <p>
        D3.js is a JavaScript library for manipulating documents based on data.
      </p>
    </div>`;
  }
}
