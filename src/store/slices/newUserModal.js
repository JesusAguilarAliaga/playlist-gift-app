import { createSlice } from "@reduxjs/toolkit";

const newUserModalSlice = createSlice({
    name: "newUser",
    initialState: false,
    reducers: {
        setNewUserModal: (state, action) => {
            return action.payload
        }
    }
})


export const { setNewUserModal } = newUserModalSlice.actions

export default newUserModalSlice.reducer