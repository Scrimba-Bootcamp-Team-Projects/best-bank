import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./config/firebase"; // Ensure db is exported from firebase.js
import { doc, getDoc } from "firebase/firestore";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Payments from "./pages/Payments";

export default function App() {
  const [user, setUser] = useState(null); // Store the user object
  const [userData, setUserData] = useState(null); // Store user-specific data from Firestore

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        try {
          // Fetch user data from Firestore
          const userRef = doc(db, "accounts", user.uid); // Adjust "users" to your specific collection
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            setUserData(userSnap.data()); // Set user data if document exists
          } else {
            console.log("No such document!");
            // Handle case where user document doesn't exist
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          // Handle error fetching user data from Firestore
        }
      } else {
        setUserData(null); // Reset user data if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  return (
    <BrowserRouter>
      {user ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage userData={userData} />} />
            <Route path="/payments" element={<Payments />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
}