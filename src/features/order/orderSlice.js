import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  orders: [],
};

export const getMyOrders = createAsyncThunk(
  "user/getMyOrders",
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

const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: {
    [getMyOrders.pending]: (state) => {
      state.isLoading = true;
    },
    [getMyOrders.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.orders = payload.ordersData;
    },
    [getMyOrders.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default orderSlice.reducer;
