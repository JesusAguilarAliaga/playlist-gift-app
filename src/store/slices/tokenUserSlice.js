import { createSlice } from "@reduxjs/toolkit";
import { axiosMusic, axiosPlaylist } from "../../utils/configAxios";

const initialData = {
    email: "",
    name: "",
    token: "",
}

const tokenUserSlice = createSlice({
    name: "tokenUser",
    initialState: {
        tokenUser: initialData,
        loader: false,
    },
    reducers: {
        setTokenUser: (state, action) => {
            const newTokenUser = action.payload
            return {... state, tokenUser: newTokenUser}
        },
        setLoader: (state, action) => {
            const newLoader = action.payload
            return { ...state, loader: newLoader }
        }
    },
}) 


const { setTokenUser, setLoader } = tokenUserSlice.actions

export default tokenUserSlice.reducer

export const login = (data, navigateTo) => (dispatch) => {
    dispatch(setLoader(true))
    // axiosPlaylist
    axiosMusic
        .post("/api/auth/login", data)
        .then(({data}) => {
            dispatch(setTokenUser(data));
            console.log(data)
            navigateTo("/home");
        })
        .catch((err) => {
            console.log(err)
    })
    .finally(() => dispatch(setLoader(false)))
}