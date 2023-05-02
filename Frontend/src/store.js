import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../src/features/auth/authSlice";
import { initAuth } from "./features/auth/authApi";
import loadingReducer from "./features/loadingScreen/loadingSlice";
import { expensesReducer } from "./features/expenses/expensesSlice";
import assignSelectedExpenseReducer from "./features/selectedExpense/selectedExpenseSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    loading: loadingReducer,
    expenses: expensesReducer,
    selectedExpense: assignSelectedExpenseReducer,
  },
});

// Middleware for handling Firebase authentication
store.dispatch(initAuth());
