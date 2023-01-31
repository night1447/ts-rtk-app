import {IUser} from "../../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "../ActionCreators";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const UserSlice = createSlice({
    name: 'user', initialState: initialState,
    reducers: {
        // userFetching(state) {
        //     state.isLoading = true;
        // },
        // userFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false;
        //     state.error = '';
        //     state.users = action.payload;
        // },
        // userFetchingError(state, action: PayloadAction<string>) {
        //     state.error = action.payload;
        //     state.isLoading = false;
        // }
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
    }
})

export default UserSlice.reducer;
