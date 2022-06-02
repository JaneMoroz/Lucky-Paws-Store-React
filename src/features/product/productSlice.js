import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  products: [],
  product: null,
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

export const getProductById = createAsyncThunk(
  "user/getProductById",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.get(`/products/${id}`);
      const productData = res.data.data.data;
      return { productData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addNewProduct = createAsyncThunk(
  "user/addNewProduct",
  async (product, thunkAPI) => {
    try {
      const res = await customFetch.post("/products", product);
      const productData = res.data.data.data;
      return { productData };
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
    [getProductById.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductById.fulfilled]: (state, { payload }) => {
      state.product = payload.productData;
      state.isLoading = false;
    },
    [getProductById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [addNewProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [addNewProduct.fulfilled]: (state, { payload }) => {
      toast.success(`${payload.productData.name} is added`);
      state.isLoading = false;
    },
    [addNewProduct.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default productSlice.reducer;
