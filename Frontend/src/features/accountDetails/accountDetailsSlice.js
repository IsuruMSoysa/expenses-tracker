import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAccountDetails, editAccountDetails } from "./accountDetailsApi";

const initialState = {
  currentUserDetails: null,
  status: "idle",
};

export const fetchAccountDetails = createAsyncThunk(
  "expenses/fetchAccountDetails",
  async (userId) => {
    const data = await getAccountDetails(userId);
    return data;
  }
);

export const updateAccountDetails = createAsyncThunk(
  "expenses/updateAccountDetails",
  async ({ id, editObj }) => {
    const docRef = await editAccountDetails(id, editObj);
    return { ...editObj, id: docRef.id };
  }
);

const accountDetailsSlice = createSlice({
  name: "accountDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccountDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUserDetails = action.payload;
      })
      .addCase(fetchAccountDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateAccountDetails.fulfilled, (state, action) => {
        const { id, editObj } = action.payload;
        const index = state.findIndex((item) => item.id === id);
        state[index] = { ...state[index], ...editObj };
      });
  },
});

const { reducer, actions } = accountDetailsSlice;

export default reducer;
