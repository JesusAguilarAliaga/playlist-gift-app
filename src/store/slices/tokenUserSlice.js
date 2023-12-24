import { createSlice } from "@reduxjs/toolkit";
import { axiosPlaylist } from "../../utils/configAxios";

const tokenUserSlice = createSlice({
    name: "tokenUser",
    initialState: {
        email: "",
        name: "",
        token: "",
    },
    reducers: {
        setTokenUser: (state, action) => {
            const newTokenUser = action.payload
            return {... state, ... newTokenUser}
        },
    },
}) 


const { setTokenUser } = tokenUserSlice.actions

export default tokenUserSlice.reducer

export const login = (data, navigateTo) => (dispatch) => {
    axiosPlaylist
        .post("/api/auth/login", data)
        .then(({data}) => {
            dispatch(setTokenUser(data));
            console.log(data)
            navigateTo("/home");
        })
        .catch((err) => {
            console.log(err);
    }); 
}