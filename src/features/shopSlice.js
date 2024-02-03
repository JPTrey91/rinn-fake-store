import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopItems: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    stockItems: (state, action) => {
      const allItems = action.payload;
      state.shopItems = [...allItems];
    },
  },
});

export const { stockItems } = shopSlice.actions;
export default shopSlice.reducer;
