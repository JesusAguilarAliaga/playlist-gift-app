import { configureStore } from "@reduxjs/toolkit";
import tokenUserSlice from "./slices/tokenUserSlice";
import addedList from "./slices/addedList";
import inputTitleCasette from "./slices/inputTitleCasette";
import inputNameCasette from "./slices/inputNameCasette";
import inputMessageCasette from "./slices/inputMessageCasette";

export default configureStore({
    reducer: {
        tokenUser: tokenUserSlice,
        addedList: addedList,
        inputTitleCasette: inputTitleCasette,
        inputNameCasette: inputNameCasette,
        inputMessageCasette: inputMessageCasette,
    }
})
