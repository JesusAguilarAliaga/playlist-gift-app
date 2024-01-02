import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    name: "PARA:",
    message: "MESSAGE",
}

const inputsToCreateSlice = createSlice({
    name: "inputsToCreate",
    initialState,
    reducers: {
        setTitle(state, action) {
            state.title = action.payload
        },
        setName(state, action) {
            state.name = action.payload
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

export const { setTitle, setName, setMessage, resetInputsCreate } = inputsToCreateSlice.actions

export default inputsToCreateSlice.reducer