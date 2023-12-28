import { createSlice } from "@reduxjs/toolkit";
import { axiosMusic, axiosPlaylist } from "../../utils/configAxios";

const fetchCrudSlice = createSlice({
    name: "fetchCrud",
    initialState: {
        fetchCrud: [],
        loader: false,
    },
    reducers: {
        setFetchCrud: (state, action) => {
            const newFetchCrud = action.payload
            return { ...state, fetchCrud: newFetchCrud }
        },
    }
})


const { setFetchCrud } = fetchCrudSlice.actions

export default fetchCrudSlice.reducer



export const fetchGetAll = (data) => (dispatch) => {
    axiosPlaylist
        .get("/api/playlists/me", data)
        .then(({data}) => {
            dispatch(setFetchCrud(data));
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
    });
}

export const fetchCreate = (data, token) => (dispatch) => {
    axiosPlaylist
        .post("/api/playlists", data, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })
        .then(({data}) => {
            dispatch(fetchGetAll({headers: {
                Authorization: `JWT ${token}`
            }}))
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
    }); 
}

export const fetchDelete = (id, token) => (dispatch) => {
    console.log(`/api/playlist/${id}`)
    axiosPlaylist
        .delete(`/api/playlists/${id}`, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })
        .then(({data}) => {
            dispatch(fetchGetAll({headers: {
                Authorization: `JWT ${token}`
            }}))
            console.log("usuario eliminado" , data)
        })
        .catch((err) => {
            console.log(err);
        })
}

export const fetchUpdate = (id, data, token) => (dispatch) => {
    axiosPlaylist
        .patch(`/api/playlists/${id}`, data, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })
        .then(({data}) => {
            dispatch(fetchGetAll({headers: {
                Authorization: `JWT ${token}`
            }}))
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
    });
}

