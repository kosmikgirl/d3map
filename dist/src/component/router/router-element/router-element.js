var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement } from 'lit';
import { html } from 'lit/static-html.js';
import { customElement, state } from 'lit/decorators.js';
import { isLocaleEnabled } from '../../../config/locale-config';
import router from '../../../router/router';
import { routes } from '../../../router/routes';
import { styles } from './styles';
let RouterElement = class RouterElement extends LitElement {
    constructor() {
        super(...arguments);
        this.activeRoute = {
            tag: routes[0].tag,
            routeData: {},
        };
    }
    connectedCallback() {
        super.connectedCallback();
        const processedRoutes = isLocaleEnabled
            ? routes.map((route) => ({
                ...route,
                path: `/:lang${route.path}`,
            }))
            : routes;
        processedRoutes.forEach(route => {
            router.on({
                [route.path]: {
                    as: route.name,
                    uses: (match) => this.changeRoute(match),
                },
            });
        });
        router.resolve();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        routes.forEach(route => {
            router.off(route.path);
        });
    }
    changeRoute(matchedRoute) {
        const foundRoute = routes.find(route => route.name === matchedRoute.route.name);
        if (!foundRoute)
            return;
        this.activeRoute = {
            tag: foundRoute.tag,
            routeData: matchedRoute.data || {},
        };
    }
    render() {
        const { tag, routeData } = this.activeRoute;
        return html `<${tag} .routeData=${routeData}></${tag}>`;
    }
};
RouterElement.styles = styles;
__decorate([
    state()
], RouterElement.prototype, "activeRoute", void 0);
RouterElement = __decorate([
    customElement('router-element')
], RouterElement);
export default RouterElement;
//# sourceMappingURL=router-element.js.map