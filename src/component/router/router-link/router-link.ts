import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import router from '../../../router/router';
import styles from './router-link.scss';

type Link = {
  name: string;
  routeData: Record<string, string>;
};

@customElement('router-link')
export default class RouterLink extends LitElement {
  static styles = [ css([styles] as unknown as TemplateStringsArray) ];

  @property() to: string | Link = '/';
  @property() title: string = '';

  navigate(event: MouseEvent) {
    event.preventDefault();

    if (typeof this.to === 'string') return router.navigate(this.to);

    router.navigateByName(this.to.name, this.to.routeData);
  }

  render() {
    return html`
      <a href=${this.to} title=${this.title} @click=${this.navigate}>
        <span data-hover=${this.title}>
          <slot></slot>
        </span>
      </a>
    `;
  }
}
