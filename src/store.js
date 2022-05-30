import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import orderSlice from "./features/order/orderSlice";
import reviewSlice from "./features/review/reviewSlice";
import productSlice from "./features/product/productSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    order: orderSlice,
    review: reviewSlice,
    product: productSlice,
  },
});
