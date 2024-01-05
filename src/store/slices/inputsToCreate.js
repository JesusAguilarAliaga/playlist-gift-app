import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    to: "",
    message: "",
}

const inputsToCreateSlice = createSlice({
    name: "inputsToCreate",
    initialState,
    reducers: {
        setTitle(state, action) {
            state.title = action.payload
        },
        setTo(state, action) {
            state.to = action.payload
        },
        setMessage(state, action) {
            state.message = action.payload
        },
        resetInputsCreate(state) {
            state.title = initialState.title
            state.name = initialState.name
            state.message = initialState.message
        }
    },
})

export const { setTitle, setTo, setMessage, resetInputsCreate } = inputsToCreateSlice.actions

export default inputsToCreateSlice.reducer