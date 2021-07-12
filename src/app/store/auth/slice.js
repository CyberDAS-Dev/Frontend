import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        name: null,
        lastName: null,
        isAuth: false,
    },
    reducers: {
        login: (state, action) => {
            state.name = action.payload.name;
            state.lastName = action.payload.lastName;
            state.isAuth = true;
        },

        logout: (state) => {
            state.name = null;
            state.lastName = null;
            state.isAuth = false;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
