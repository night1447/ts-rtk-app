import {rootReducer} from "./reducers";
import {configureStore} from "@reduxjs/toolkit";
import {postAPI} from "../services/PostService";

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postAPI.middleware)
    })
}
export type typeAppStore = ReturnType<typeof setupStore>;
export type typeAppDispatch = typeAppStore['dispatch'];
