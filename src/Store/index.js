import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users-slice";
import fetchingSlice from "./fetchingStatus-slice";
import modalSlice from "./modal-slice";

const store = configureStore({
    reducer: {
        usersData: usersSlice.reducer,
        fetchingStatus: fetchingSlice.reducer,
        modalStatus: modalSlice.reducer,
    }
});

export default store;