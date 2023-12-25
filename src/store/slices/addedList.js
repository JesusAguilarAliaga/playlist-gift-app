import { createSlice } from "@reduxjs/toolkit";

const addedListSlice = createSlice({
    name: "addedList",
    initialState: [],
    reducers: {
        adToList: (state, action) => {
            const item = action.payload;
            const existingItem = state.find((existing) => existing.id === item.id);

            if (!existingItem) {
                state.push(item);
            }
        },
        removeToList: (state, action) => {
            const itemToRemove = action.payload;
            return state.filter((item) => item.id !== itemToRemove.id);
        }
    }
})

export const { adToList, removeToList } = addedListSlice.actions

export default addedListSlice.reducer