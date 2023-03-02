var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import PageElement from '../abstract/page-element';
import styles from './not-found-page.scss';
let NotFoundPage = class NotFoundPage extends PageElement {
    constructor() {
        super({ title: 'Not found' });
    }
    render() {
        return html `<div class="notfound-container">
      <h2 class="not-found">Not Found</h2>
    </div>`;
    }
};
NotFoundPage.styles = [css([styles])];
NotFoundPage = __decorate([
    customElement('not-found-page')
], NotFoundPage);
export default NotFoundPage;
//# sourceMappingURL=not-found-page.js.map