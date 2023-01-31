import {combineReducers} from "redux";
import userReducer from './User/UserSlice';
import {postAPI} from "../../services/PostService";

export const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
})

export type typeRootReducer = ReturnType<typeof rootReducer>;