import { configureStore } from "@reduxjs/toolkit";
import tokenUserLogin from "./slices/tokenUserLogin";

export default configureStore({
    reducer: {
        tokenUserLogin: tokenUserLogin,
    }
})


