import {html, LitElement} from 'lit';
import {state, customElement} from 'lit/decorators.js';
import {connect} from 'pwa-helpers';
import store from '../store/store';
import {AppState, setIsInitialized} from '../store/module/app';
import SEO from '../util/seo';
import CatImage from '../asset/image/cat.jpg?webp';
import '../component/router/router-element/router-element';
import '../component/nav-element/nav-element';
import '../component/image-element/image-element';
import {styles} from './styles';

@customElement('app-root')
export class AppRoot extends connect(store)(LitElement) {
  static styles = styles;

  @state() private isInitialized = false;

  stateChanged({app: {isInitialized, pageMetadata}}: {app: AppState}) {
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
    return html`
      <header>
        <nav-element></nav-element>
      </header>
      <main>
        <router-element></router-element>
      </main>
    `;
  }
}
