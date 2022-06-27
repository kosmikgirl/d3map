import {html, PropertyValues} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {msg as localize, localized} from '@lit/localize/lit-localize';
import PageElement from '../abstract/page-element';
import { css } from 'lit';
import styles from './home-page.scss';



@localized()
@customElement('home-page')
export default class HomePage extends PageElement {
  static styles = [ css([styles] as unknown as TemplateStringsArray) ];


  constructor() {
    super({title: 'Home'});
  }

  render() {
    return html`<div>
    
    <h2>${localize('HomePage')}</h2>
    
    </div>`;
  }


}
