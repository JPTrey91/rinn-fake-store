import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import shopReducer from "../features/shopSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
  },
});
