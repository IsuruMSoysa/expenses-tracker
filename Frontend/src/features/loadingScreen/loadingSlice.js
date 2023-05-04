import { createSlice } from "@reduxjs/toolkit";

const initialState = { showLoading: false };

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.showLoading = !state.showLoading;
    },
  },
});

const { reducer, actions } = loadingSlice;

export const { toggleLoading } = actions;
export default reducer;
