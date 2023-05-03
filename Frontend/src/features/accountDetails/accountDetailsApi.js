import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
} from "@firebase/firestore";
const usersCollectionRef = collection(db, "users");

export const getAccountDetails = async (userId) => {
  const q = query(usersCollectionRef, where("authId", "==", userId));
  const querySnapshot = await getDocs(q);
  const minData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log("bro", minData[0]);
  return minData[0];
};

// export const addExpenses = async (expenseObj) => {
//   await addDoc(usersCollectionRef, expenseObj);
// };

export const updateExpenses = async (id, expense) => {
  const expDoc = doc(db, "expense", id);
  await updateDoc(expDoc, expense);
};

// export const deleteDoc = async (id) => {
//   await firebase.firestore().collection('expenses').doc(id).delete();
// };
