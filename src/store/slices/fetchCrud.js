import { createSlice } from "@reduxjs/toolkit";
import { axiosMusic, axiosPlaylist } from "../../utils/configAxios";

const fetchCrudSlice = createSlice({
    name: "fetchCrud",
    initialState: {
        fetchCrud: [],
        loader: false,
        createSuccess: false,
        deleteSuccess: false,
        editSuccess: false,
    },
    reducers: {
        setFetchCrud: (state, action) => {
            const newFetchCrud = action.payload
            return { ...state, fetchCrud: newFetchCrud }
        },
        setLoader: (state, action) => {
            const newLoader = action.payload
            return { ...state, loader: newLoader }
        },
        setCreateSuccess: (state, action) => {
            const newCreateSuccess = action.payload
            return { ...state, createSuccess: newCreateSuccess }
        },
        setDeleteSuccess: (state, action) => {
            const newDeleteSuccess = action.payload
            return { ...state, deleteSuccess: newDeleteSuccess }
        },
        setEditSuccess: (state, action) => {
            const newEditSuccess = action.payload
            return { ...state, editSuccess: newEditSuccess }
        }
    },
})


const { setFetchCrud, setLoader, setCreateSuccess, setDeleteSuccess, setEditSuccess } = fetchCrudSlice.actions

export default fetchCrudSlice.reducer



export const fetchGetAll = (data) => (dispatch) => {
    dispatch(setLoader(true))
    axiosMusic
        .get("/api/playlists/me", data)
        .then(({data}) => {
            dispatch(setFetchCrud(data));
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => dispatch(setLoader(false)))
}

export const fetchCreate = (data, token) => (dispatch) => {
    dispatch(setLoader(true))
    axiosMusic
        .post("/api/playlists", data, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })
        .then(({data}) => {
            dispatch(fetchGetAll({headers: {
                Authorization: `JWT ${token}`
            }}))
            dispatch(setCreateSuccess(true))
            setTimeout(() => {
                dispatch(setCreateSuccess(false))
            }, 3000);
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => dispatch(setLoader(false)))
}

export const fetchDelete = (id, token) => (dispatch) => {
    dispatch(setLoader(true))
    axiosMusic
        .delete(`/api/playlists/${id}`, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })
        .then(({data}) => {
            dispatch(fetchGetAll({headers: {
                Authorization: `JWT ${token}`
            }}))
            dispatch(setDeleteSuccess(true))
            setTimeout(() => {
                dispatch(setDeleteSuccess(false))
            }, 3000);
            console.log("usuario eliminado" , data)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => dispatch(setLoader(false)))
}

export const fetchUpdate = (id, data, token) => (dispatch) => {
    dispatch(setLoader(true))
    axiosMusic
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
            dispatch(setEditSuccess(true))
            setTimeout(() => {
                dispatch(setEditSuccess(false))
            }, 3000);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => dispatch(setLoader(false)))
}

