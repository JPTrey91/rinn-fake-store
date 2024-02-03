import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopItems: [],
  isShowingModal: false,
  isShowingSidebar: true,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    stockItems: (state, action) => {
      const allItems = action.payload;
      state.shopItems = [...allItems];
    },
    showModal: (state) => {
      state.isShowingModal = true;
    },
    hideModal: (state) => {
      state.isShowingModal = false;
    },
    showSidebar: (state) => {
      state.isShowingSidebar = true;
    },
    hideSidebar: (state) => {
      state.isShowingSidebar = false;
    },
  },
});

export const { stockItems, showModal, hideModal, showSidebar, hideSidebar } =
  shopSlice.actions;
export default shopSlice.reducer;
