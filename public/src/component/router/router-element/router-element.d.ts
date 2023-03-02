import { LitElement } from 'lit';
import { Match } from 'navigo';
export default class RouterElement extends LitElement {
    static styles: import("lit").CSSResult;
    private activeRoute;
    connectedCallback(): void;
    disconnectedCallback(): void;
    changeRoute(matchedRoute: Match): void;
    render(): import("lit-html").TemplateResult<2 | 1>;
}
