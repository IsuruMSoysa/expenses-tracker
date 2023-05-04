import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBatOQMRd6Btp8ttsyBd_QZTwbeFxffvK4",
  authDomain: "expenses-tracker-8cee4.firebaseapp.com",
  projectId: "expenses-tracker-8cee4",
  storageBucket: "expenses-tracker-8cee4.appspot.com",
  messagingSenderId: "43273886495",
  appId: "1:43273886495:web:7a425c2fa412e98a3c6e2a",
  measurementId: "G-8Z84TPQN18",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);
