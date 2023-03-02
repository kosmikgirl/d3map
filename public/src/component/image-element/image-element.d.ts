import { LitElement } from 'lit';
export declare class ImageElement extends LitElement {
    static styles: import("lit").CSSResult;
    imageSet: Array<string>;
    alt: string;
    private srcSet;
    $img: HTMLImageElement;
    private lazyLoadObserver;
    constructor();
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    loadIntersectedImage(image: IntersectionObserverEntry): Promise<void>;
    willUpdate(changedProps: Map<string, boolean>): void;
    render(): import("lit-html").TemplateResult<1>;
}
