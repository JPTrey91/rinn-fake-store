import { createSlice } from "@reduxjs/toolkit";
import { defaultCart } from "../Components/DefaultCart";

const initialState = {
  cartItems: getExistingCart(),
  itemCount: getExistingCart().length,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      state.cartItems = [...state.cartItems, item];
      state.itemCount = state.cartItems.length;
      updateLocalStorage(state.cartItems);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      state.itemCount = state.cartItems.length;
      updateLocalStorage(state.cartItems);
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      state.cartItems = state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      );
      updateLocalStorage(state.cartItems);
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
      updateLocalStorage(state.cartItems);
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      );
      updateLocalStorage(state.cartItems);
    },
  },
});

function updateLocalStorage(cartItems) {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

function getExistingCart() {
  const cart = localStorage.getItem("cart");
  if (cart) return JSON.parse(cart);
  return defaultCart;
}

export const {
  addItem,
  removeItem,
  incrementQuantity,
  updateQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
