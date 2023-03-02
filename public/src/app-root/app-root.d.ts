import { LitElement } from 'lit';
import { AppState } from '../store/module/app';
import '../component/router/router-element/router-element';
import '../component/nav-element/nav-element';
import '../component/image-element/image-element';
declare const AppRoot_base: (new (...args: any[]) => {
    _storeUnsubscribe: import("redux").Unsubscribe;
    connectedCallback(): void;
    disconnectedCallback(): void;
    stateChanged(_state: {
        app: AppState;
    }): void;
    readonly isConnected: boolean;
}) & typeof LitElement;
export declare class AppRoot extends AppRoot_base {
    static styles: import("lit").CSSResult[];
    private isInitialized;
    stateChanged({ app: { isInitialized, pageMetadata } }: {
        app: AppState;
    }): void;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
