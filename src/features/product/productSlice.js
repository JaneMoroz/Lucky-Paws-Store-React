import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  products: [],
};

export const getAllProducts = createAsyncThunk(
  "user/getAllProducts",
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get("/products");
      const productsData = res.data.data.data;
      return { productsData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.products = payload.productsData;
      state.isLoading = false;
    },
    [getAllProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default productSlice.reducer;
