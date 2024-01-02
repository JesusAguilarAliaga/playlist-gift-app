import { configureStore } from "@reduxjs/toolkit";
import tokenUserSlice from "./slices/tokenUserSlice";
import addedList from "./slices/addedList";
import inputTitleCasette from "./slices/inputTitleCasette";
import inputNameCasette from "./slices/inputNameCasette";
import inputMessageCasette from "./slices/inputMessageCasette";
import fetchCrud from "./slices/fetchCrud";
import newUserModal from "./slices/newUserModal";
import deleteModal from "./slices/deleteModal";
import inputsToCreate from "./slices/inputsToCreate";

export default configureStore({
    reducer: {
        tokenUser: tokenUserSlice,
        addedList: addedList,
        inputTitleCasette: inputTitleCasette,
        inputNameCasette: inputNameCasette,
        inputMessageCasette: inputMessageCasette,
        fetchCrud: fetchCrud,
        newUserModal: newUserModal,
        deleteModal: deleteModal,
        inputsToCreate: inputsToCreate,
    }
})
