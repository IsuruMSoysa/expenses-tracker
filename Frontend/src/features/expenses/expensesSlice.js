import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getExpenses,
  addExpenses,
  updateExpenses,
  deleteExpenses,
} from "./expensesApi";

const initialState = {
  expenses: null,
  status: "idle",
  error: null,
};

export const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async (userId) => {
    const data = await getExpenses(userId);
    return data;
  }
);

export const createExpense = createAsyncThunk(
  "expenses/createExpense",
  async (expense) => {
    const docRef = await addExpenses(expense);
    return { ...expense, id: docRef.id };
  }
);

export const updateExpense = createAsyncThunk(
  "expenses/updateExpense",
  async ({ itemid, editObj }) => {
    const docRef = await updateExpenses(itemid, editObj);
    return { ...editObj, id: docRef.id };
  }
);

export const deleteExpense = createAsyncThunk(
  "expenses/deleteExpense",
  async (id) => {
    await deleteExpenses(id);
    return id;
  }
);

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.expenses = action.payload;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createExpense.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        const { id, expense } = action.payload;
        const index = state.findIndex((item) => item.id === id);
        state[index] = { ...state[index], ...expense };
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        return state.filter((item) => item.id !== action.payload);
      });
  },
});

export const expensesReducer = expensesSlice.reducer;
