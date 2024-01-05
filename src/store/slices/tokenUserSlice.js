import { createSlice } from "@reduxjs/toolkit";
import { axiosMusic } from "../../utils/configAxios";
import { toastError } from "../../utils/notifications";


const storageUser = localStorage.getItem("PLAYLIST_USER");
let initialState;

if (storageUser) {
    initialState = JSON.parse(storageUser);
} else {
    initialState = { email: "", name: "", token: "" };
}

const tokenUserSlice = createSlice({
    name: "tokenUser",
    initialState: {
        tokenUser: initialState,
        loader: false,
    },
    reducers: {
        setTokenUser: (state, action) => {
            const newTokenUser = action.payload
            localStorage.setItem("PLAYLIST_USER", JSON.stringify(newTokenUser))
            return { ...state, tokenUser: newTokenUser }
        },
        logout: (state) => {
            localStorage.removeItem("PLAYLIST_USER")
            window.location.reload()
            return { ...state, tokenUser: initialState }
        },
        setLoader: (state, action) => {
            const newLoader = action.payload
            return { ...state, loader: newLoader }
        }
    },
})

export const { setTokenUser, logout, setLoader } = tokenUserSlice.actions

export default tokenUserSlice.reducer

export const login = (data, navigateTo) => (dispatch) => {
    dispatch(setLoader(true))
    axiosMusic
        .post("/api/auth/login", data)
        .then(({ data }) => {
            dispatch(setTokenUser(data));
            navigateTo("/home");
        })
        .catch((err) => {
            if (err.response.status === 403) {
                toastError("Credenciales incorrectas")
            } else {
                toastError("Error al iniciar sesión, intentalo de nuevo")
            }
            console.log(err)
        })
        .finally(() => dispatch(setLoader(false)))
}