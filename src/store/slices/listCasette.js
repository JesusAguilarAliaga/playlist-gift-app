import { createSlice } from "@reduxjs/toolkit";

const listCasetteSlice = createSlice({
    name: "listCasette",
    initialState: {
        listCasette: []
    },
    reducers: {
        setListCasette: (state, action) => {
            const newListCasette = action.payload
            return { ...state, listCasette: newListCasette }
        },
        deleteTrack: (state, action) => {
            const newListCasette = state.listCasette.filter(track => track.id !== action.payload)
            return { ...state, listCasette: newListCasette }
        }
    }
})

export const { setListCasette, deleteTrack } = listCasetteSlice.actions

export default listCasetteSlice.reducer