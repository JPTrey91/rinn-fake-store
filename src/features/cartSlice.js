import { createSlice } from "@reduxjs/toolkit";
import { defaultCart } from "../Components/DefaultCart";

const initialState = {
  cartItems: defaultCart,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      state.cartItems = [...state.cartItems, item];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      state.cartItems = state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item,
      );
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      );
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item,
      );
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementQuantity,
  updateQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
