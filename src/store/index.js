import { configureStore } from "@reduxjs/toolkit";
import tokenUserSlice from "./slices/tokenUserSlice";
import addedList from "./slices/addedList";

export default configureStore({
    reducer: {
        tokenUser: tokenUserSlice,
        addedList: addedList,
    }
})
