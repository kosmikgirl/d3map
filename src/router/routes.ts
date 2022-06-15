import {literal} from 'lit/static-html.js';
import {RouteType} from '../data/type/';
import {RouteNames, RouteDataParam} from '../data/enum/';
import '../page/home-page/home-page';
import '../page/about-page/about-page';
import '../page/not-found-page/not-found-page';
import '../page/date-picker/date-picker';

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
    name: RouteNames.DATE_PICKER,
    path: '/date-picker',
    tag: literal`date-picker`,
  }
];
