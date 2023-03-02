var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import PageElement from '../abstract/page-element';
import { css } from 'lit';
import styles from './about-page.scss';
let AboutPage = class AboutPage extends PageElement {
    constructor() {
        super({ title: 'About' });
    }
    render() {
        return html `<div class="about-container">
      <h2>
        About me and the motivations that took me to this personal project
      </h2>

      <p>
        I'm
        <a
          href="https://www.linkedin.com/in/rochajulianacarolina/"
          target="_blank"
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
};
AboutPage.styles = [css([styles])];
AboutPage = __decorate([
    customElement('about-page')
], AboutPage);
export default AboutPage;
//# sourceMappingURL=about-page.js.map