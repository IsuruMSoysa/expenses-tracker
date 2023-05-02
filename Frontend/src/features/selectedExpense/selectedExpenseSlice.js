import { createSlice } from "@reduxjs/toolkit";

const initialState = { expenseItem: null };

const selectedExpenseSlice = createSlice({
  name: "selectedExpense",
  initialState,
  reducers: {
    assignSelectedExpense: (state, action) => {
      state.expenseItem = action.payload;
    },
  },
});

const { reducer, actions } = selectedExpenseSlice;

export const { assignSelectedExpense } = actions;
export default reducer;
