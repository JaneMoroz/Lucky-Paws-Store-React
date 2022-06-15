import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";
import { clearAllAfterLogout } from "../features/user/userSlice";

const customFetch = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

customFetch.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers.common["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearAllAfterLogout());
    return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
  }
  return thunkAPI.rejectWithValue(error.response.data.message);
};

export default customFetch;
