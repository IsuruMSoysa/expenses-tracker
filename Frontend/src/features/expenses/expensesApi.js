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
const expensesCollectionRef = collection(db, "expense");

export const getExpenses = async (userId) => {
  const q = query(expensesCollectionRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  const minData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return minData;
};

export const addExpenses = async (expenseObj) => {
  await addDoc(expensesCollectionRef, expenseObj);
};

export const updateExpenses = async (id, expense) => {
  const expDoc = doc(db, "expense", id);
  await updateDoc(expDoc, expense);
};

// export const deleteDoc = async (id) => {
//   await firebase.firestore().collection('expenses').doc(id).delete();
// };
