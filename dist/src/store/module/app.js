import { createSlice } from '@reduxjs/toolkit';
export const appSlice = createSlice({
    name: 'app',
    initialState: {
        isInitialized: false,
        pageMetadata: { title: '' },
    },
    reducers: {
        setIsInitialized: (state, action) => {
            state.isInitialized = action.payload;
        },
        setPageMetadata: (state, action) => {
            state.pageMetadata = action.payload;
        },
    },
});
export const { setIsInitialized, setPageMetadata } = appSlice.actions;
export default appSlice.reducer;
//# sourceMappingURL=app.js.map