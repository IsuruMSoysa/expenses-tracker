import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.status = "loading";
    },
    loginSuccess(state, action) {
      state.status = "succeeded";
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
      state.user = null;
    },
    logout(state) {
      state.user = null;
    },
  },
});

// Export actions for use in components
export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

// Thunk for handling login with Firebase
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const user = await authApi.login(email, password);
    dispatch(loginSuccess(user));
    localStorage.setItem("uid", user.accessToken);
    return { success: true, message: "Login Success" };
  } catch (error) {
    dispatch(loginFailure(error.message));
    // alert("error:", error);
    // console.log(error.message);
    // if (error.message == "Firebase: Error (auth/wrong-password).") {
    //   return { success: false, message: "Wrong password!" };
    // } else {
    //   return { success: false, message: "Unexpected error occured!" };
    // }

    switch (error.message) {
      case "Firebase: Error (auth/user-not-found).":
        return { success: false, message: "Email not found!" };
      case "Firebase: Error (auth/wrong-password).":
        return { success: false, message: "Wrong password!" };
      default:
        return { success: false, message: "Unexpected error occured!" };
    }
  }
};

export const signup = (email, password) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const user = await authApi.signup(email, password);
    dispatch(loginSuccess(user));
    console.log(user);
  } catch (error) {
    dispatch(loginFailure(error.message));
    alert("error:", error);
  }
};
// export const initAuth = initAuth();

export default authSlice.reducer;