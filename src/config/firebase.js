// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-YWrPlhZRrcxLLmodXhOdBpfFz4MyPAM",
  authDomain: "best-bank-c1f3e.firebaseapp.com",
  projectId: "best-bank-c1f3e",
  storageBucket: "best-bank-c1f3e.appspot.com",
  messagingSenderId: "930774079860",
  appId: "1:930774079860:web:406d2bb2e48a3b600e7421",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);

/* 
  To test getting data from firebase put this code in App.jsx then check the console in the developer tools
  Link to firestore Docs https://firebase.google.com/docs/firestore/query-data/get-data

import { getDocs, collection } from "firebase/firestore";
import { db } from "./config/firebase";

const querySnapshot = await getDocs(collection(db, "accounts"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

*/
