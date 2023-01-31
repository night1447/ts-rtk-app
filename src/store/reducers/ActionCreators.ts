import axios from "axios";
import {IUser} from "../../models/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: typeAppDispatch) => {
//     try {
//         dispatch(UserSlice.actions.userFetching());
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//         dispatch(UserSlice.actions.userFetchingSuccess(response.data));
//
//     } catch (e: any) {
//         dispatch(UserSlice.actions.userFetchingError(e.message));
//
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (e:any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)