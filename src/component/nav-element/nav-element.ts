import {html, css, LitElement} from 'lit';
import {RouteDataParam, RouteNames} from '../../data/enum';
import {customElement} from 'lit/decorators.js';
import styles from './nav-element.scss';
import '../router/router-link/router-link';

@customElement('nav-element')
export class NavElement extends LitElement {
  static styles = [css([styles] as unknown as TemplateStringsArray)];

  render() {
    return html`<nav class="navbar">
      <router-link to="/" title="Home Page">Home</router-link>
      <router-link
        .to=${{
          name: RouteNames.ABOUT,
          routeData: {
            [RouteDataParam.ID]: 'demo',
          },
        }}
        title="About Page"
      >
        About
      </router-link>
      <router-link
        .to=${{
          name: RouteNames.GEO_PAGE,
        }}
        title="Geo Page"
      >
        Geo Page
      </router-link>
      <router-link to="xyz" title="Not Found">Not found</router-link>
    </nav>`;
  }
}
