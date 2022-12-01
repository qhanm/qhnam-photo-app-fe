import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {AppStoreInterface} from "../interfaces/Stores/AppStoreInterface";

const initial: AppStoreInterface = {
    auth: null,
    isAuthenticated: false,
}

export const AppStore = createSlice({
    name: 'AppStoreReducer',
    initialState: initial,
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload;
            state.isAuthenticated = !!action.payload;
        }
    }
})


export const AppStoreSelector = (state: RootState) => state.AppStoreReducer;

export const  {
    setAuth
} = AppStore.actions;
export default AppStore.reducer
