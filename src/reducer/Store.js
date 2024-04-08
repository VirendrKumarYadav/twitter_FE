import {configureStore} from '@reduxjs/toolkit';
import useSlice from "./useSlice";

export const Store = configureStore({
    reducer: {
        useSlice
    }
});


