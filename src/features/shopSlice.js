import { createSlice } from "@reduxjs/toolkit";
import { SHOW_SIDEBAR_DEFAULT } from "../constants";

const initialState = {
  isShowingModal: false,
  isShowingSidebar: SHOW_SIDEBAR_DEFAULT,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
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

export const { showModal, hideModal, showSidebar, hideSidebar } =
  shopSlice.actions;
export default shopSlice.reducer;
