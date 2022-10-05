import {customElement, property} from 'lit/decorators.js';
import {html, LitElement, css} from 'lit';
import styles from './country-card.scss';

@customElement('country-card')
export class CountryCard extends LitElement {
  static styles = css([styles] as unknown as TemplateStringsArray);

  @property() countryInformation: any;

  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  firstUpdated(): void {}

  render() {
    const {name, subregion, capital, population, flag, currencies} =
      this.countryInformation;

    const theCurrencies = Object.values(currencies)[0];

    return html`<ul>
      <li>
        <b>Name:</b>
        ${name?.common}
      </li>
      <li>
        <b>Official Name:</b>
        ${name?.official}
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
}
