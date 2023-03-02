var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { RouteDataParam, RouteNames } from '../../data/enum';
import { customElement } from 'lit/decorators.js';
import styles from './nav-element.scss';
import '../router/router-link/router-link';
let NavElement = class NavElement extends LitElement {
    render() {
        return html `<nav class="navbar">
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
};
NavElement.styles = [css([styles])];
NavElement = __decorate([
    customElement('nav-element')
], NavElement);
export { NavElement };
//# sourceMappingURL=nav-element.js.map