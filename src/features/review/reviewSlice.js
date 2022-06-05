import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  reviews: [],
};

export const getAllReviews = createAsyncThunk(
  "user/getAllReviews",
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get("/reviews");
      const reviewsData = res.data.data.data;
      return { reviewsData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getMyReviews = createAsyncThunk(
  "user/getMyReviews",
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get("/reviews/myReviews");
      const reviewsData = res.data.data.data;
      return { reviewsData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState,
  extraReducers: {
    [getAllReviews.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllReviews.fulfilled]: (state, { payload }) => {
      state.reviews = payload.reviewsData;
      state.isLoading = false;
    },
    [getAllReviews.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [getMyReviews.pending]: (state) => {
      state.isLoading = true;
    },
    [getMyReviews.fulfilled]: (state, { payload }) => {
      state.reviews = payload.reviewsData;
      state.isLoading = false;
    },
    [getMyReviews.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default reviewSlice.reducer;
