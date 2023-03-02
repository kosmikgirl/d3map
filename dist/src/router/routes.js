import { literal } from 'lit/static-html.js';
import { RouteNames, RouteDataParam } from '../data/enum/';
import '../page/home-page/home-page';
import '../page/about-page/about-page';
import '../page/not-found-page/not-found-page';
import '../page/geo-page/geo-page';
export const routes = [
    {
        name: RouteNames.HOME,
        path: '/',
        tag: literal `home-page`,
    },
    {
        name: RouteNames.ABOUT,
        path: `/about/:${RouteDataParam.ID}`,
        tag: literal `about-page`,
    },
    {
        name: RouteNames.NOT_FOUND,
        path: '/404',
        tag: literal `not-found-page`,
    },
    {
        name: RouteNames.GEO_PAGE,
        path: '/geo-page',
        tag: literal `geo-page`,
    },
];
//# sourceMappingURL=routes.js.map