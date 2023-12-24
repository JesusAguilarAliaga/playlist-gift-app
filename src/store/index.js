import { configureStore } from "@reduxjs/toolkit";
import addedList from "./slices/addedList";

export default configureStore({
    reducer: {
        addedList: addedList,
    },
})