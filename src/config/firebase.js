import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import * as firebaseui from 'firebaseui';
import { EmailAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import 'firebaseui/dist/firebaseui.css';

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
const db = getFirestore(app);
// Authentication
const auth = getAuth(app);

const uiConfig = {
  signInOptions: [
    {
      // provider: firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    },
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    }
  ],
  
};

const ui = new firebaseui.auth.AuthUI(auth);

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // User is signed in
    const user = userCredential.user;
    // You can use the user object for user information
    console.log("Logged in user:", user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // Handle errors here, such as displaying a message to the user
    // console.log("login unsuccesful")
    // console.error("Login error:", errorCode, errorMessage);
    return false
  }
};

export { db, auth, ui, uiConfig, login };
