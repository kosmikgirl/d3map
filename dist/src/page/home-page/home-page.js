var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { localized } from '@lit/localize/lit-localize';
import PageElement from '../abstract/page-element';
import { css } from 'lit';
import styles from './home-page.scss';
let HomePage = class HomePage extends PageElement {
    constructor() {
        super({ title: 'Home' });
    }
    render() {
        return html `<div class="homepage-container">
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
};
HomePage.styles = [css([styles])];
HomePage = __decorate([
    localized(),
    customElement('home-page')
], HomePage);
export default HomePage;
//# sourceMappingURL=home-page.js.map