var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import router from '../../../router/router';
import styles from './router-link.scss';
let RouterLink = class RouterLink extends LitElement {
    constructor() {
        super(...arguments);
        this.to = '/';
        this.title = '';
    }
    navigate(event) {
        event.preventDefault();
        if (typeof this.to === 'string')
            return router.navigate(this.to);
        router.navigateByName(this.to.name, this.to.routeData);
    }
    render() {
        return html `
      <a href=${this.to} title=${this.title} @click=${this.navigate}>
        <span data-hover=${this.title}>
          <slot></slot>
        </span>
      </a>
    `;
    }
};
RouterLink.styles = [css([styles])];
__decorate([
    property()
], RouterLink.prototype, "to", void 0);
__decorate([
    property()
], RouterLink.prototype, "title", void 0);
RouterLink = __decorate([
    customElement('router-link')
], RouterLink);
export default RouterLink;
//# sourceMappingURL=router-link.js.map