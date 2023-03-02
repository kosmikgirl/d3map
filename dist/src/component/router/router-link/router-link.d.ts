import { LitElement } from 'lit';
declare type Link = {
    name: string;
    routeData: Record<string, string>;
};
export default class RouterLink extends LitElement {
    static styles: import("lit").CSSResult[];
    to: string | Link;
    title: string;
    navigate(event: MouseEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
