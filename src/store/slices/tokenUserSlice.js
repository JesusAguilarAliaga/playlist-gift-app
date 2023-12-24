import { createSlice } from "@reduxjs/toolkit";
import { axiosPlaylist } from "../../utils/configAxios";

const storageUser = localStorage.getItem("PLAYLIST_USER") 
        ? JSON.parse(localStorage.getItem("PLAYLIST_USER")) 
        : { email: "", name: "", token: "" }

const tokenUserSlice = createSlice({
    name: "tokenUser",
    initialState: storageUser,
    reducers: {
        setTokenUser: (state, action) => {
            const newTokenUser = action.payload
            localStorage.setItem("PLAYLIST_USER", JSON.stringify(newTokenUser))
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