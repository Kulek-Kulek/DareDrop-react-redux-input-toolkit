import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalIsActive: false,
    backdropIsActive: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalActive(state, action) {
            state.modalIsActive = action.payload;
        },
        backdropActive(state, action) {
            state.backdropIsActive = action.payload;
        }
    }
});

export const modalActions = modalSlice.actions;

export default modalSlice;