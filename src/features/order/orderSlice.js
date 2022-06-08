import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  orders: [],
  order: null,
  allOrders: [],
};

export const getMyOrders = createAsyncThunk(
  "order/getMyOrders",
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get("/order/myOrders");
      const ordersData = res.data.data.data;
      return { ordersData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getMyOrder = createAsyncThunk(
  "order/getMyOrder",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.get(`/order/myOrders/${id}`);
      const orderData = res.data.data.data;
      return { orderData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllOrders = createAsyncThunk(
  "order/getAllOrders",
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get("/order");
      const ordersData = res.data.data.data;
      return { ordersData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getOrderById = createAsyncThunk(
  "order/getOrderById",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.get(`/order/${id}`);
      const orderData = res.data.data.data;
      return { orderData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: {
    [getMyOrders.pending]: (state) => {
      state.isLoading = true;
    },
    [getMyOrders.fulfilled]: (state, { payload }) => {
      state.orders = payload.ordersData;
      state.isLoading = false;
    },
    [getMyOrders.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [getMyOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [getMyOrder.fulfilled]: (state, { payload }) => {
      state.order = payload.orderData;
      state.isLoading = false;
    },
    [getMyOrder.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [getAllOrders.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllOrders.fulfilled]: (state, { payload }) => {
      state.allOrders = payload.ordersData;
      state.isLoading = false;
    },
    [getAllOrders.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [getOrderById.pending]: (state) => {
      state.isLoading = true;
    },
    [getOrderById.fulfilled]: (state, { payload }) => {
      state.order = payload.orderData;
      state.isLoading = false;
    },
    [getOrderById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default orderSlice.reducer;
