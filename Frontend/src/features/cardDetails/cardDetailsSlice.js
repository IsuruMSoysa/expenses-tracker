import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalEarnings: 0,
  totalExpenses: 0,
  categoryArray: [],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setExpenses: (state, action) => {
      let cardObject = calcTotalExpenses(action.payload);
      state.totalExpenses = cardObject.total;
      state.categoryArray = cardObject.categoryArray;
    },
    increaseEarnings: (state, action) => {
      state.totalEarnings = state.totalEarnings + action.payload;
    },
  },
});

function calcTotalExpenses(expenArr) {
  let total = 0;
  let Transport = 0;
  let Rent = 0;
  let Food = 0;
  let Utilities = 0;
  let Entertainment = 0;

  if (Array.isArray(expenArr)) {
    expenArr.forEach((element) => {
      total = total + parseInt(element.amount);
      switch (element.type) {
        case "Transport":
          Transport = Transport + parseInt(element.amount);
          break;
        case "Rent":
          Rent = Rent + parseInt(element.amount);
          break;
        case "Food":
          Food = Food + parseInt(element.amount);
          break;
        case "Utilities":
          Utilities = Utilities + parseInt(element.amount);
          break;
        case "Entertainment":
          Entertainment = Entertainment + parseInt(element.amount);
      }
    });
  }
  return {
    total: total,
    categoryArray: [Transport, Rent, Food, Utilities, Entertainment],
  };
}

const { reducer, actions } = cardSlice;

export const { setExpenses, increaseEarnings } = actions;
export default reducer;
