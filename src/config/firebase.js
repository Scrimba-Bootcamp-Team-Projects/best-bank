import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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


