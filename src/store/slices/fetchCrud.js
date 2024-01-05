import { createSlice } from "@reduxjs/toolkit";
import { axiosMusic, axiosPlaylist } from "../../utils/configAxios";
import { toastError, toastInfo, toastSuccess, toastWarning } from "../../utils/notifications";
import { resetInputsCreate } from "./inputsToCreate";
import { resetAddedList } from "./addedList";

const fetchCrudSlice = createSlice({
    name: "fetchCrud",
    initialState: {
        fetchCrud: [],
        loader: false,
        error: false,
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
        setError: (state, action) => {
            const newError = action.payload
            return { ...state, error: newError }
        }
    },
})

const { setFetchCrud, setLoader, setError } = fetchCrudSlice.actions

export default fetchCrudSlice.reducer

export const fetchGetAll = (data) => (dispatch) => {
    dispatch(setLoader(true))
    axiosPlaylist
    // axiosMusic
        .get("/api/playlists/me", data)
        .then(({data}) => {
            dispatch(setFetchCrud(data));
            console.log(data)
        })
        .catch((err) => {
            if(err.response.status === 429) {
                toastWarning("Muchas peticiones, espera un momento")
            }
            console.log(err);
        })
        .finally(() => dispatch(setLoader(false)))
}

export const fetchCreate = (data, token, setModalCreateList) => (dispatch) => {
    dispatch(setLoader(true))
    axiosPlaylist
    // axiosMusic
        .post("/api/playlists", data, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })
        .then(({data}) => {
            dispatch(fetchGetAll({headers: {
                Authorization: `JWT ${token}`
            }}))
            setModalCreateList(false)
            dispatch(resetInputsCreate())
            dispatch(resetAddedList())
            toastSuccess("Playlist creada correctamente")
            setTimeout(() => {
                toastInfo("Puedes seguir editando tu playlist en la sección: Mis Grabaciones")
            }, 1000);
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
            if(err.response.status === 403) {
                toastWarning("No puedes crear una playlist vacia")
            }else{
                toastError("Error al crear la playlist")
            }
        })
        .finally(() => dispatch(setLoader(false)))
}

export const fetchDelete = (id, token, navigate) => (dispatch) => {
    dispatch(setLoader(true))
    axiosPlaylist
    // axiosMusic
        .delete(`/api/playlists/${id}`, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })
        .then(({data}) => {
            dispatch(fetchGetAll({headers: {
                Authorization: `JWT ${token}`
            }}))
            toastSuccess("Playlist eliminada correctamente")
            navigate(-1)
            console.log("usuario eliminado" , data)
        })
        .catch((err) => {
            if(err.response.status === 429) {
                toastWarning("Muchas peticiones, espera un momento")
            }else{
                toastError("Error al eliminar la playlist, intentalo de nuevo")
            }
            console.log(err);
        })
        .finally(() => dispatch(setLoader(false)))
}

export const fetchUpdate = (id, data, token) => (dispatch) => {
    dispatch(setLoader(true))
    axiosPlaylist
    // axiosMusic
        .patch(`/api/playlists/${id}`, data, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })
        .then(({data}) => {
            dispatch(fetchGetAll({headers: {
                Authorization: `JWT ${token}`
            }}))
            toastSuccess("Playlist actualizada")
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
            if(err.response.status === 429) {
                toastWarning("Muchas peticiones, espera un momento")
            }else{
                toastError("Error al actualizar la playlist, intentalo de nuevo")
            }
        })
        .finally(() => dispatch(setLoader(false)))
}

