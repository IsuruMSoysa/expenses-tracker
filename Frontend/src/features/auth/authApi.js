import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { auth } from "../../firebase-config";
import { loginSuccess, logout } from "./authSlice";

// Middleware for handling Firebase authentication
export const initAuth = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(loginSuccess(user));
    } else {
      dispatch(logout());
    }
  });
};

// Firebase authentication methods
export const authApi = {
  async login(email, password) {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    console.log(user, password, email);
    return user;
  },
  async signup(email, password) {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  },
  async logout() {
    await auth.signOut();
  },
};
