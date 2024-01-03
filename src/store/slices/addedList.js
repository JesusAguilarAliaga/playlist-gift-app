import { createSlice } from "@reduxjs/toolkit";
import { toastError } from "../../utils/notifications";

const addedListSlice = createSlice({
    name: "addedList",
    initialState: [],
    reducers: {
        adToList: (state, action) => {
            const item = action.payload;
            const existingItem = state.find((existing) => existing.id === item.id);
            
            if (!existingItem) {
                state.push(item);
            }else{
                toastError("Ya existe en la lista");
            }
        },
        removeToList: (state, action) => {
            const itemToRemove = action.payload;
            return state.filter((item) => item.id !== itemToRemove.id);
        },
        resetAddedList: () => {
            return [];
        }
    }
})

export const { adToList, removeToList, resetAddedList } = addedListSlice.actions

export default addedListSlice.reducer