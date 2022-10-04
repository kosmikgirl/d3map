import {html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {RouteDataParam} from '../../data/enum';
import PageElement from '../abstract/page-element';
import {css} from 'lit';
import styles from './about-page.scss';

@customElement('about-page')
export default class AboutPage extends PageElement {
  static styles = [css([styles] as unknown as TemplateStringsArray)];

  constructor() {
    super({title: 'About'});
  }

  render() {
    return html`<div class="about-container">
      <h2>
        About me and the motivations that took me to this personal project
      </h2>

      <p>
        I'm
        <a href="https://www.linkedin.com/in/rochajulianacarolina/"
          >Juliana Rocha,</a
        >
        front end developer, born and raised in Argentina, working in the IT
        industry for a while now.
      </p>

      <p>
        The current Google project that I am working on, required a migration
        from Vue to Lit, so we needed to learn the library. Also, d3.js is
        included since it is a really nice library to show dynamic data in a
        nice, neat, fun and creative way!
      </p>

      <p>I was really fun doing it, I hope you enjoy the results!</p>
    </div>`;
  }
}
