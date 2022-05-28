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
        photo: res.data.data.user.photo,
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
        photo: res.data.data.user.photo,
      };
      return { userData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    try {
      const res = await customFetch.patch("/users/updateMe", user);
      const userData = res.data.data;
      return { userData };
    } catch (error) {
      if (error.response.status === 401) {
        return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const updateUserPassword = createAsyncThunk(
  "user/updateUser",
  async (passwords, thunkAPI) => {
    try {
      const res = await customFetch.patch("/users/updateMyPassword", passwords);
      const userData = res.data;
      return { userData };
    } catch (error) {
      if (error.response.status === 401) {
        return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
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
      state.isLoading = false;
      state.user = userData;
      addUserToLocalStorage(userData);
      toast.success(`Welcome Back ${userData.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { userData } = payload;
      state.isLoading = false;
      state.user.name = userData.user.name;
      state.user.email = userData.user.email;
      state.user.photo = userData.user.photo;
      addUserToLocalStorage(state.user);
      toast.success("User updated!");
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [updateUserPassword.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUserPassword.fulfilled]: (state, { payload }) => {
      const { userData } = payload;
      state.isLoading = false;
      state.user.token = userData.token;
      addUserToLocalStorage(state.user);
      toast.success("Password updated!");
    },
    [updateUserPassword.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default userSlice.reducer;
