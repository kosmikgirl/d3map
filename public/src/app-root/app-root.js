var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { state, customElement } from 'lit/decorators.js';
import { connect } from 'pwa-helpers';
import store from '../store/store';
import { setIsInitialized } from '../store/module/app';
import SEO from '../util/seo';
import '../component/router/router-element/router-element';
import '../component/nav-element/nav-element';
import '../component/image-element/image-element';
import styles from './app-root.scss';
let AppRoot = class AppRoot extends connect(store)(LitElement) {
    constructor() {
        super(...arguments);
        this.isInitialized = false;
    }
    stateChanged({ app: { isInitialized, pageMetadata } }) {
        this.isInitialized = isInitialized;
        pageMetadata.title.length > 0 && SEO.setSiteMetadata(pageMetadata);
        /**
         *  Uncomment the next condition and run `pwa:build` to get the PWA web worker up and running.
         *  It will only be available in your build.
         *
         *  If you need to customize the configuration, please visit:
         *  https://developers.google.com/web/tools/workbox/guides/generate-service-worker/cli.
         */
        // if (
        //   state.app.isInitialized &&
        //   'serviceWorker' in navigator &&
        //   import.meta.env?.MODE !== 'development'
        // ) {
        //   window.addEventListener('load', () => {
        //     navigator.serviceWorker.register('./service-worker.js').then(
        //       registration => {
        //         console.log(
        //           'ServiceWorker registration successful with scope: ',
        //           registration.scope
        //         );
        //       },
        //       err => {
        //         console.log('ServiceWorker registration failed: ', err);
        //       }
        //     );
        //   });
        // }
        // this is how to set an image
        // <image-element .imageSet=${CatImage} alt="Cat"></image-element>
        // this is to set the title
        // <h1>${!this.isInitialized ? 'Loading...' : 'Lit Scaffold'}</h1>
    }
    connectedCallback() {
        super.connectedCallback();
        store.dispatch(setIsInitialized(true));
    }
    render() {
        return html `
      <header>
        <nav-element></nav-element>
      </header>
      <main>
        <router-element></router-element>
      </main>
    `;
    }
};
AppRoot.styles = [css([styles])];
__decorate([
    state()
], AppRoot.prototype, "isInitialized", void 0);
AppRoot = __decorate([
    customElement('app-root')
], AppRoot);
export { AppRoot };
//# sourceMappingURL=app-root.js.map