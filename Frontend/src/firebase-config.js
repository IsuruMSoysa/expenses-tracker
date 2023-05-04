import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  //apikey: process.env.REACT_APP_ET_API_KEY,
  apikey: import.meta.env.VITE_ET_API_KEY,
  authDomain: import.meta.env.ET_AUTH_DOMAIN,
  projectId: import.meta.env.ET_PROJECT_IT,
  storageBucket: import.meta.env.ET_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.ET_MESSAGE_SENDER_ID,
  appId: import.meta.env.ET_APP_ID,
  measurementId: import.meta.env.ET_MESUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);
