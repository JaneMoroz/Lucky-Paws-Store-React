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
  shippingPrice: cart?.shippingPrice || 20,
  total: cart?.total || 0,
  isLoading: false,
};

export const getMyCart = createAsyncThunk(
  "user/getMyCart",
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

export const createCart = createAsyncThunk(
  "cart/createCart",
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

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (cartItem, thunkAPI) => {
    try {
      const res = await customFetch.post("/cart", cartItem);
      const cartData = res.data.data.data;
      return { cartData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async (data, thunkAPI) => {
    const { cartId, cartItemId, cartItemData } = data;
    try {
      const res = await customFetch.patch(
        `/cart/${cartId}/${cartItemId}`,
        cartItemData
      );
      const cartData = res.data.data.data;
      console.log(cartData);
      return { cartData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (data, thunkAPI) => {
    const { cartId, cartItemId } = data;
    try {
      const res = await customFetch.delete(`/cart/${cartId}/${cartItemId}`);
      console.log(res);
      return { res, cartItemId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
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
      const { id, amount, style, color } = payload;
      let tempCartItems = state.cartItems.map((item) => {
        if (item.product.id === id) {
          if (
            (item.style && item.style === style) ||
            (item.color && item.color === color)
          ) {
            let tempQuantity = item.quantity + amount;
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
        let amount = 0;
        let subtotal = 0;
        state.cartItems.forEach((item) => {
          amount += item.quantity;
          subtotal += item.quantity * item.purchasePrice;
        });
        state.totalAmount = amount;
        state.subtotal = subtotal;
        state.total = (subtotal + state.shippingPrice).toFixed(2);
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
    [createCart.pending]: (state) => {
      state.isLoading = true;
    },
    [createCart.fulfilled]: (state, { payload }) => {
      state.cartId = payload.cartData.id;
      state.cartItems = payload.cartData.products;
      state.subtotal = payload.cartData.subtotal;
      state.taxes = payload.cartData.taxes;
      state.shippingPrice = payload.cartData.shippingPrice;
      state.total = payload.cartData.total;
      addCartToLocalStorage(state);
      state.isLoading = false;
    },
    [createCart.rejected]: (state, { payload }) => {
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
    [updateCartItem.pending]: (state) => {
      state.isLoading = true;
    },
    [updateCartItem.fulfilled]: (state, { payload }) => {
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
      state.isLoading = false;
    },
    [updateCartItem.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteCartItem.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteCartItem.fulfilled]: (state, { payload }) => {
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
      state.isLoading = false;
    },
    [deleteCartItem.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {
  clearCart,
  addItemToLocalCart,
  calculateTotals,
  updateCartItemQuantity,
  removeCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
