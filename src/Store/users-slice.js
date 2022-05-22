import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    userPicked: {},
    matchingUsers: [],
    inputValue: ''
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchData(state, action) {
            state.users = state.users.concat(action.payload);
        },
        matchingUsers(state, action) {
            state.matchingUsers = action.payload && action.payload.lettersTyped && !action.payload.userPicked ?
                state.users.filter(username => username.username.toLowerCase().startsWith(action.payload.lettersTyped.toLowerCase())) :
                [];
        },
        userPicked(state, action) {
            const userPicked = action.payload ? state.matchingUsers.find(user => user.id.toString() === action.payload.toString()) : {};
            state.userPicked = userPicked;
            state.inputValue = userPicked && userPicked.username ? userPicked.username : '';
        },
        lettersTyped(state, action) {
            state.inputValue = action.payload;
        }
    }
});

export const usersActions = usersSlice.actions;

export default usersSlice;