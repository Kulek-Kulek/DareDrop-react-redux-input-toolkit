import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: false,
    message: ''
}

const fetchingSlice = createSlice({
    name: 'fetchingStatus',
    initialState,
    reducers: {
        fetchingStatus(state, action) {
            state.isLoading = action.payload.isLoading;
            state.error = action.payload.error;
            state.message = action.payload.message;
        },
    }
});

export const fetchingStateActions = fetchingSlice.actions;

export default fetchingSlice;



