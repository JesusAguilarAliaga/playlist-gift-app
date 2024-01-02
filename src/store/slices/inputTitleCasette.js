import { createSlice } from "@reduxjs/toolkit";

const inputTitleCasetteSlice = createSlice({
    name: "inputTitleCasette",
    initialState: "",
    reducers: {
        setDataInput: (state, action) => {
            const newData = action.payload
            return newData
        }
    }
})


export const { setDataInput } = inputTitleCasetteSlice.actions

export default inputTitleCasetteSlice.reducer