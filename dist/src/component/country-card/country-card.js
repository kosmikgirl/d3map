var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, property } from 'lit/decorators.js';
import { html, LitElement, css } from 'lit';
import styles from './country-card.scss';
let CountryCard = class CountryCard extends LitElement {
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    firstUpdated() { }
    render() {
        const { name, subregion, capital, population, flag, currencies } = this.countryInformation;
        const theCurrencies = Object.values(currencies)[0];
        return html `<ul>
      <li>
        <b>Name:</b>
        ${name === null || name === void 0 ? void 0 : name.common}
      </li>
      <li>
        <b>Official Name:</b>
        ${name === null || name === void 0 ? void 0 : name.official}
      </li>
      <li>
        <b>Subregion:</b>
        ${subregion}
      </li>
      <li>
        <b>Capital City: </b>
        ${capital}
      </li>
      <li>
        <b>Population: </b>
        ${population}
      </li>
      <li>
        <b>Flag: </b>
        ${flag}
      </li>
      <li>
        <b>Currency:</b>
        <ul>
          <li><b>Name:</b> ${theCurrencies.name}</li>
          <li><b>Symbol:</b> ${theCurrencies.symbol}</li>
        </ul>
      </li>
    </ul>`;
    }
};
CountryCard.styles = css([styles]);
__decorate([
    property()
], CountryCard.prototype, "countryInformation", void 0);
CountryCard = __decorate([
    customElement('country-card')
], CountryCard);
export { CountryCard };
//# sourceMappingURL=country-card.js.map