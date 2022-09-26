import {literal} from 'lit/static-html.js';
import {RouteType} from '../data/type/';
import {RouteNames, RouteDataParam} from '../data/enum/';
import '../page/home-page/home-page';
import '../page/about-page/about-page';
import '../page/not-found-page/not-found-page';
import '../page/wine-searcher/geolocation-page';
import '../page/geo-page/geo-page';

export const routes: ReadonlyArray<RouteType> = [
  {
    name: RouteNames.HOME,
    path: '/',
    tag: literal`home-page`,
  },
  {
    name: RouteNames.ABOUT,
    path: `/about/:${RouteDataParam.ID}`,
    tag: literal`about-page`,
  },
  {
    name: RouteNames.NOT_FOUND,
    path: '/404',
    tag: literal`not-found-page`,
  },
  {
    name: RouteNames.GEOLOCATION_PAGE,
    path: '/geolocation-page',
    tag: literal`geolocation-page`,
  },
  {
    name: RouteNames.GEO_PAGE,
    path: '/geo-page',
    tag: literal`geo-page`,
  },
];
