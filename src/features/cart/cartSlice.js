import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";
import {
  getCartFromLocalStorage,
  addCartToLocalStorage,
} from "../../utils/localStorage";

const cart = getCartFromLocalStorage();

const initialState = {
  cartId: cart?.cartId || null,
  cartItems: cart?.cartItems || [],
  totalAmount: cart?.totalAmount || 0,
  subtotal: cart?.subtotal || 0,
  taxes: cart?.taxes || 0,
  shippingPrice: cart?.shippingPrice || 0,
  total: cart?.total || 0,
  isLoading: false,
};

export const getMyCart = createAsyncThunk(
  "user/getMyCart",
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get("/cart/myCart?ordered=false");
      const cartData = res.data.data.data;
      console.log(cartData);
      return { cartData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (cartItem, thunkAPI) => {
    try {
      const res = await customFetch.post("/cart", cartItem);
      const cartData = res.data.data.data;
      console.log(cartData);
      return { cartData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [getMyCart.pending]: (state) => {
      state.isLoading = true;
    },
    [getMyCart.fulfilled]: (state, { payload }) => {
      if (payload.cartData.length !== 0) {
        state.cartId = payload.cartData[0].id;
        state.cartItems = payload.cartData[0].products;
        state.subtotal = payload.cartData[0].subtotal;
        state.taxes = payload.cartData[0].taxes;
        state.shippingPrice = payload.cartData[0].shippingPrice;
        state.total = payload.cartData[0].total;
        state.totalAmount = payload.cartData[0].products.reduce(
          (total, cartItem) => {
            const { quantity } = cartItem;
            total += quantity;
            return total;
          },
          0
        );
      }
      addCartToLocalStorage(state);
      state.isLoading = false;
    },
    [getMyCart.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [addItemToCart.pending]: (state) => {
      state.isLoading = true;
    },
    [addItemToCart.fulfilled]: (state, { payload }) => {
      state.cartId = payload.cartData.id;
      state.cartItems = payload.cartData.products;
      state.subtotal = payload.cartData.subtotal;
      state.taxes = payload.cartData.taxes;
      state.shippingPrice = payload.cartData.shippingPrice;
      state.total = payload.cartData.total;
      state.totalAmount = payload.cartData.products.reduce(
        (total, cartItem) => {
          const { quantity } = cartItem;
          total += quantity;
          return total;
        },
        0
      );
      addCartToLocalStorage(state);
      toast.success("Product is added to cart");
      state.isLoading = false;
    },
    [addItemToCart.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default cartSlice.reducer;
