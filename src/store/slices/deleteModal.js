import { createSlice } from "@reduxjs/toolkit";

const deleteModalSlice = createSlice({
    name: "deleteModalSlice",
    initialState: {
        deleteModal: false,
        id: null
    },
    reducers: {
        setDeleteModal: (state, action) => {
            return {
                ...state,
                deleteModal: action.payload
            }
        },
        setDeleteId: (state, action) => {
            return {
                ...state,
                id: action.payload
            }
        }
    }
})


export const { setDeleteModal, setDeleteId } = deleteModalSlice.actions

export default deleteModalSlice.reducer