import { createSlice } from "@reduxjs/toolkit";

const musicPlaySlice = createSlice({
    name: "musicPlay",
    initialState: {
        musicLink: "",
        name: "",
        artists: "",
        isPlaying: false,
        externalUrl: ""
    },
    reducers: {
        setMusicPlay: (state, action) => {
            return { ...state, musicLink: action.payload, isPlaying: true }
        },
        setNameMusic: (state, action) => {
            return { ...state, name: action.payload }
        },
        setArtistsMusic: (state, action) => {
            return { ...state, artists: action.payload }
        },
        resetMusic: (state) => {
            return { ...state, musicLink: "", isPlaying: false }
        },
        setExternalUrl: (state, action) => {
            return { ...state, externalUrl: action.payload }
        }
    }
})

export const { setMusicPlay, resetMusic, setNameMusic, setArtistsMusic, setExternalUrl } = musicPlaySlice.actions

export default musicPlaySlice.reducer