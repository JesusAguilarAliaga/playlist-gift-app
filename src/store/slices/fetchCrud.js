import { createSlice } from "@reduxjs/toolkit";
import { axiosMusic} from "../../utils/configAxios";
import { toastError, toastInfo, toastSuccess, toastWarning } from "../../utils/notifications";
import { resetInputsCreate } from "./inputsToCreate";
import { resetAddedList } from "./addedList";
import { deleteTrack } from "./listCasette";

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

const { setFetchCrud, setLoader } = fetchCrudSlice.actions

export default fetchCrudSlice.reducer

export const fetchGetAll = (data) => (dispatch) => {
    dispatch(setLoader(true))
    axiosMusic
        .get("/api/playlists/me", data)
        .then(({data}) => {
            dispatch(setFetchCrud(data));
        })
        .catch((err) => {
            if(err.response.status === 429) {
                toastWarning("Muchas peticiones, espera un momento")
            }
            console.log(err);
        })
        .finally(() => dispatch(setLoader(false)))
}

export const fetchCreate = (data, setModalCreateList) => (dispatch) => {
    dispatch(setLoader(true))
    axiosMusic
        .post("/api/playlists", data)
        .then(() => {
            dispatch(fetchGetAll())
            setModalCreateList(false)
            dispatch(resetInputsCreate())
            dispatch(resetAddedList())
            toastSuccess("Playlist creada correctamente")
            setTimeout(() => {
                toastInfo("Puedes seguir editando tu playlist en la sección: Mis Grabaciones")
            }, 1000);
        })
        .catch((err) => {
            console.log(err);
            if(err.response.status === 403) {
                toastWarning("No puedes crear una playlist sin canciones")
            }else{
                toastError("Error al crear la playlist")
            }
        })
        .finally(() => dispatch(setLoader(false)))
}

export const fetchDelete = (id, navigate) => (dispatch) => {
    dispatch(setLoader(true))
    axiosMusic
        .delete(`/api/playlists/${id}`)
        .then(() => {
            dispatch(fetchGetAll())
            toastSuccess("Playlist eliminada correctamente")
            navigate(-1)
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

export const fetchUpdate = (id, data) => (dispatch) => {
    dispatch(setLoader(true))
    axiosMusic
        .patch(`/api/playlists/${id}`, data)
        .then(() => {
            dispatch(fetchGetAll())
            toastSuccess("Playlist actualizada")
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

export const fetchDeleteTrack = (id, idPlaylist) => (dispatch) => {
    dispatch(setLoader(true))
    axiosMusic.delete(`api/playlists/${idPlaylist}/tracks/${id}`)
        .then(() => {
            toastSuccess("Cancion eliminada correctamente")
            dispatch(deleteTrack(id))
        })
        .catch((err) => {
            console.log(err);
            if(err.response.status === 429) {
                toastWarning("Muchas peticiones, espera un momento")
            }else{
                toastError("Error al eliminar la cancion, intentalo de nuevo")
            }
        })
        .finally(() => dispatch(setLoader(false)))
}

