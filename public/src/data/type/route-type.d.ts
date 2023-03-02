import { RouteDataParam } from '../enum/';
export declare type RouteData = {
    [key in RouteDataParam]?: string;
};
export declare type RouteType = {
    name: string;
    path: string;
    tag: {
        _$litStatic$: unknown;
    };
};
