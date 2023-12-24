import { createSlice } from "@reduxjs/toolkit";

const addedListSlice = createSlice({
    name: "addedList",
    initialState: [],
    reducers: {
        adToList: (state, action) => {
            const item = action.payload
            state.push(item)
        }
    }
})

export const { adToList } = addedListSlice.actions

export default addedListSlice.reducer