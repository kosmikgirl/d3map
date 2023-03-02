declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    app: import("./module/app").AppState;
}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
    app: import("./module/app").AppState;
}, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<{
    app: import("./module/app").AppState;
}, import("redux").AnyAction, undefined>]>;
export default store;
