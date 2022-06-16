import {html, LitElement} from 'lit';
import {RouteDataParam, RouteNames} from '../../data/enum';
import {customElement} from 'lit/decorators.js';
import {styles} from './styles';
import '../router/router-link/router-link';

@customElement('nav-element')
export class NavElement extends LitElement {
  static styles = styles;

  render() {
    return html`<nav>
      <router-link to="/" title="HomePage">Home</router-link>
      <router-link
        .to=${{
          name: RouteNames.ABOUT,
          routeData: {
            [RouteDataParam.ID]: 'demo',
          },
        }}
        title="AboutPage"
      >
        About
      </router-link>
      <router-link .to=${{
        name: RouteNames.GEOLOCATION_PAGE
      }} 
      title="GeolocationPage">
        Geolocation Page
      </router-link>
      <router-link to="xyz">Not found</router-link>
    </nav>`;
  }
}
