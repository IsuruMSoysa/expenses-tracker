import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
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

export const updateExpenses = async (id, editObj) => {
  const expDoc = doc(db, "expense", id);
  await updateDoc(expDoc, editObj);
};

export const deleteExpenses = async (id) => {
  const expDoc = doc(db, "expense", id);
  await deleteDoc(expDoc);
};
