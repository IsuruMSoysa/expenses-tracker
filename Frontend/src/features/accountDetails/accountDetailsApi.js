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
  return minData[0];
};

// export const addExpenses = async (expenseObj) => {
//   await addDoc(usersCollectionRef, expenseObj);
// };

export const editAccountDetails = async (id, editObj) => {
  const q = query(usersCollectionRef, where("authId", "==", id));
  const querySnapshot = await getDocs(q);

  const expDoc = doc(db, "users", querySnapshot.docs[0].id);
  console.log("higuys", id, editObj);
  await updateDoc(expDoc, editObj);
};

// export const deleteDoc = async (id) => {
//   await firebase.firestore().collection('expenses').doc(id).delete();
// };
