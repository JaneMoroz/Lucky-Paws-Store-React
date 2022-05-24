import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const res = await customFetch.post("/users/signup", user);
      const userData = {
        token: res.data.token,
        name: res.data.data.user.name,
        email: res.data.data.user.email,
      };
      return { userData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const res = await customFetch.post("/users/login", user);
      const userData = {
        token: res.data.token,
        name: res.data.data.user.name,
        email: res.data.data.user.email,
      };
      return { userData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { userData } = payload;
      state.isLoading = false;
      state.user = userData;
      addUserToLocalStorage(userData);
      toast.success(`Hello There ${userData.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { userData } = payload;
      console.log(userData);
      state.isLoading = false;
      state.user = userData;
      addUserToLocalStorage(userData);
      toast.success(`Welcome Back ${userData.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default userSlice.reducer;
