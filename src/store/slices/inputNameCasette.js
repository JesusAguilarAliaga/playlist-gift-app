import { createSlice } from "@reduxjs/toolkit";

const inputNameCasetteSlice = createSlice({
    name: "inputNameCasette",
    initialState: "PARA: ",
    reducers: {
        setNameCasette: (state, action) => {
            const newData = action.payload
            return newData
        }
    }
})


export const { setNameCasette } = inputNameCasetteSlice.actions

export default inputNameCasetteSlice.reducer