import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import shopReducer from "./features/shopSlice";
import { productsApi } from "./Components/Api/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

setupListeners(store.dispatch);
