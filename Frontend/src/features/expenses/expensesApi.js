import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "@firebase/firestore";
const usersCollectionRef = collection(db, "expense");

export const getExpenses = async () => {
  const data = await getDocs(usersCollectionRef);
  const minData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return minData;
};

export const addExpenses = async (expenseObj) => {
  await addDoc(usersCollectionRef, expenseObj);
};

export const updateExpenses = async (id, expense) => {
  const expDoc = doc(db, "expense", id);
  console.log("expDoc", expense);
  await updateDoc(expDoc, expense);
};

// export const deleteDoc = async (id) => {
//   await firebase.firestore().collection('expenses').doc(id).delete();
// };
