var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { setPageMetadata } from '../../store/module/app';
import store from '../../store/store';
export default class PageElement extends LitElement {
    constructor(pageMetadata) {
        super();
        this._pageMetadata = {
            title: '',
            description: '',
            banner: '',
            bannerAlt: '',
            contentType: '',
        };
        this.routeData = {};
        this._pageMetadata = pageMetadata;
    }
    connectedCallback() {
        super.connectedCallback();
        store.dispatch(setPageMetadata(this._pageMetadata));
    }
}
__decorate([
    property({ type: Object })
], PageElement.prototype, "routeData", void 0);
//# sourceMappingURL=page-element.js.map