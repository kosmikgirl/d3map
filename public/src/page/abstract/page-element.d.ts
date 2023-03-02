import { LitElement } from 'lit';
import { RouteData, PageMetadata } from '../../data/type/';
export default abstract class PageElement extends LitElement {
    readonly _pageMetadata: PageMetadata;
    protected constructor(pageMetadata: PageMetadata);
    routeData: RouteData;
    connectedCallback(): void;
}
