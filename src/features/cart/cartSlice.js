import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  subtotal: 0,
  taxes: 0,
  shippingPrice: 0,
  total: 0,
  isLoading: false,
};

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
    [addItemToCart.pending]: (state) => {
      state.isLoading = true;
    },
    [addItemToCart.fulfilled]: (state, { payload }) => {
      state.cartItems = payload.cartData.products;
      state.subtotal = payload.cartData.subtotal;
      state.taxes = payload.cartData.taxes;
      state.shippingPrice = payload.cartData.shippingPrice;
      state.totalAmount = payload.cartData.products.reduce(
        (total, cartItem) => {
          const { quantity } = cartItem;
          total += quantity;
          return total;
        },
        0
      );
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
