import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";
import { setCartIdAfterLogout } from "../cart/cartSlice";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  users: [],
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
        role: res.data.data.user.role,
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
        role: res.data.data.user.role,
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
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

export const updateUserPassword = createAsyncThunk(
  "user/updateUserPassword",
  async (passwords, thunkAPI) => {
    try {
      const res = await customFetch.patch("/users/updateMyPassword", passwords);
      const userData = res.data;
      return { userData };
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get("/users");
      const usersData = res.data.data.data;
      return { usersData };
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

export const clearAllAfterLogout = createAsyncThunk(
  "user/clearAllAfterLogout",
  async (message, thunkAPI) => {
    try {
      thunkAPI.dispatch(logoutUser(message));
      thunkAPI.dispatch(setCartIdAfterLogout());
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state, { payload }) => {
      state.user = null;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  },
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
      state.user = userData;
      addUserToLocalStorage(userData);
      state.isLoading = false;
      toast.success(`Welcome back ${userData.name}`);
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
    [getAllUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.users = payload.usersData;
      state.isLoading = false;
    },
    [getAllUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [clearAllAfterLogout.rejected]: () => {
      toast.error("There was an error!");
    },
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
