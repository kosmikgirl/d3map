import { configureStore } from '@reduxjs/toolkit';
import appReducer from './module/app';
const store = configureStore({
    reducer: {
        app: appReducer,
    },
});
export default store;
//# sourceMappingURL=store.js.map