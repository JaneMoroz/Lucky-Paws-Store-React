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
  totalQuantity: cart?.totalQuantity || 0,
  subtotal: cart?.subtotal || 0,
  taxes: cart?.taxes || 0,
  shippingPrice: cart?.shippingPrice || 0,
  total: cart?.total || 0,
  isLoading: false,
  cartItemsUpdated: false,
};

const setCart = (state, cart) => {
  state.cartId = cart.id;
  state.cartItems = cart.products;
  state.subtotal = cart.subtotal;
  state.taxes = cart.taxes;
  state.shippingPrice = cart.shippingPrice;
  state.total = cart.total;
};

export const getMyCart = createAsyncThunk(
  "cart/getMyCart",
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get("/cart/myCart?ordered=false");
      const cartData = res.data.data.data;
      return { cartData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateMyCart = createAsyncThunk(
  "cart/updateMyCart",
  async (cartItems, thunkAPI) => {
    try {
      const res = await customFetch.post("/cart/myCart", cartItems);
      const cartData = res.data.data.data;
      return { cartData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartItemsAreUpdated: (state) => {
      const oldValue = state.cartItemsUpdated;
      state.cartItemsUpdated = !oldValue;
      addCartToLocalStorage(state);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      addCartToLocalStorage(state);
    },
    addItemToLocalCart: (state, { payload }) => {
      state.cartItems.push(payload);
      addCartToLocalStorage(state);
      toast.success("Product is added to cart");
    },
    removeCartItem: (state, { payload }) => {
      const { id, style, color } = payload;
      let tempCartItems = state.cartItems.filter((item) => {
        if (item.product.id !== id) {
          return item;
        }
        if (item.product.id === id) {
          if (
            (item.style && item.style !== style) ||
            (item.color && item.color !== color)
          ) {
            return item;
          }
        }
      });
      state.cartItems = tempCartItems;
      addCartToLocalStorage(state);
    },
    updateCartItemQuantity: (state, { payload }) => {
      const { id, quantity, style, color } = payload;
      let tempCartItems = state.cartItems.map((item) => {
        if (item.product.id === id) {
          if (
            (item.style && item.style === style) ||
            (item.color && item.color === color) ||
            (!item.style && !item.color)
          ) {
            let tempQuantity = item.quantity + quantity;
            return { ...item, quantity: tempQuantity };
          }
        }
        return item;
      });
      state.cartItems = tempCartItems;
      addCartToLocalStorage(state);
    },
    calculateTotals: (state) => {
      if (state.cartItems.length !== 0) {
        let quantity = 0;
        let subtotal = 0;
        state.cartItems.forEach((item, index) => {
          quantity += item.quantity;
          subtotal += item.quantity * item.purchasePrice;
        });
        state.totalQuantity = quantity;
        state.subtotal = subtotal.toFixed(2);
      } else {
        state.totalQuantity = 0;
      }
      addCartToLocalStorage(state);
    },
  },
  extraReducers: {
    [getMyCart.pending]: (state) => {
      state.isLoading = true;
    },
    [getMyCart.fulfilled]: (state, { payload }) => {
      if (payload.cartData.length !== 0) {
        setCart(state, payload.cartData[0]);
        state.totalQuantity = payload.cartData[0].products.reduce(
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
    [updateMyCart.pending]: (state) => {
      state.isLoading = true;
    },
    [updateMyCart.fulfilled]: (state, { payload }) => {
      state.totalQuantity = payload.cartData.products.reduce(
        (total, cartItem) => {
          const { quantity } = cartItem;
          total += quantity;
          return total;
        },
        0
      );
      setCart(state, payload.cartData);
      state.isLoading = false;
      addCartToLocalStorage(state);
    },
    [updateMyCart.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {
  toggleCartItemsAreUpdated,
  clearCart,
  addItemToLocalCart,
  calculateTotals,
  updateCartItemQuantity,
  removeCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
