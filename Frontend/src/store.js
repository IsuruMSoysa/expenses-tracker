import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../src/features/auth/authSlice";
import { initAuth } from "./features/auth/authApi";
import loadingReducer from "./features/loadingScreen/loadingSlice";
import { expensesReducer } from "./features/expenses/expensesSlice";
import assignSelectedExpenseReducer from "./features/selectedExpense/selectedExpenseSlice";
import cardReducer from "./features/cardDetails/cardDetailsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    loading: loadingReducer,
    expenses: expensesReducer,
    selectedExpense: assignSelectedExpenseReducer,
    cards: cardReducer,
  },
});

// Middleware for handling Firebase authentication
store.dispatch(initAuth());
