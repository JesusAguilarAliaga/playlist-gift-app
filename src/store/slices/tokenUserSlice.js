import { createSlice } from "@reduxjs/toolkit";
import { axiosMusic, axiosPlaylist } from "../../utils/configAxios";

const initialState = { email: "", name: "", token: "" }

const storageUser = localStorage.getItem("PLAYLIST_USER") 
        ? JSON.parse(localStorage.getItem("PLAYLIST_USER")) 
        : initialState

const tokenUserSlice = createSlice({
    name: "tokenUser",
    initialState: storageUser,
    reducers: {
        setTokenUser: (state, action) => {
            const newTokenUser = action.payload
            localStorage.setItem("PLAYLIST_USER", JSON.stringify(newTokenUser))
            return {... state, ... newTokenUser}
        },
        logout: () => {
            localStorage.removeItem("PLAYLIST_USER")
            return initialState
        }
    },
}) 

export const { setTokenUser, logout } = tokenUserSlice.actions

export default tokenUserSlice.reducer

export const login = (data, navigateTo) => (dispatch) => {
    // axiosPlaylist
    axiosMusic
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