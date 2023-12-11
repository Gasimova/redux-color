import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./colors/colorSlice";


export const store = configureStore({
    reducer: {
        colorReducer : colorSlice
    }
})