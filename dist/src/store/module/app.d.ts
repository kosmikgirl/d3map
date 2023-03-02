import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { PageMetadata } from '../../data/type/';
export declare type AppState = {
    isInitialized: boolean;
    pageMetadata: PageMetadata;
};
export declare const appSlice: import("@reduxjs/toolkit").Slice<AppState, {
    setIsInitialized: (state: AppState, action: PayloadAction<boolean>) => void;
    setPageMetadata: (state: AppState, action: PayloadAction<PageMetadata>) => void;
}, "app">;
export declare const setIsInitialized: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>, setPageMetadata: import("@reduxjs/toolkit").ActionCreatorWithPayload<PageMetadata, string>;
declare const _default: import("redux").Reducer<AppState, import("redux").AnyAction>;
export default _default;
