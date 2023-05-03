import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAccountDetails } from "./accountDetailsApi";

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

// export const createExpense = createAsyncThunk(
//   "expenses/createExpense",
//   async (expense) => {
//     const docRef = await addExpenses(expense);
//     return { ...expense, id: docRef.id };
//   }
// );

export const updateAccountDetails = createAsyncThunk(
  "expenses/updateAccountDetails",
  async (id, expense) => {
    const docRef = await updateAccountDetails(id, expense);
    return { ...expense, id: docRef.id };
  }
);

// export const deleteExpense = createAsyncThunk(
//   "expenses/deleteExpense",
//   async (id) => {
//     await deleteDoc(id);
//     return id;
//   }
// );

const accountDetailsSlice = createSlice({
  name: "accountDetails",
  initialState,
  reducers: {},
  //   fetchExpenses(state, action) {
  //     console.log("hey", action.payload);
  //     state.expenses = action.payload;
  //   },
  // },
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
        const { id, expense } = action.payload;
        const index = state.findIndex((item) => item.id === id);
        state[index] = { ...state[index], ...expense };
      });
  },
});

const { reducer, actions } = accountDetailsSlice;
// export const expensesReducer = accountDetailsSlice.reducer;

// export const { setExpenses, increaseEarnings } = actions;
export default reducer;
