import { createSlice } from "@reduxjs/toolkit";

const inputMessageCasetteSlice = createSlice({
    name: "inputMessageCassete",
    initialState: "MENSAJE",
    reducers:{
        setMessageCasette: (state, action) => {
            const newData = action.payload
            return newData
        }
    }
})


export const { setMessageCasette } = inputMessageCasetteSlice.actions

export default inputMessageCasetteSlice.reducer