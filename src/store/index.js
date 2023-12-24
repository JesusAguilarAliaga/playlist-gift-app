import { configureStore } from "@reduxjs/toolkit";
import tokenUserSlice from "./slices/tokenUserSlice";

export default configureStore({
    reducer: {
        tokenUser: tokenUserSlice,
    }
})


