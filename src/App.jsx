import React from "react";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Payments from "./pages/Payments";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "./config/firebase";

export default function App() {
  const [userData, setUserData] = React.useState([]);
  const [didLoginFail, setDidLoginFail] = React.useState(false);

  async function handleSubmit(data) {
    const q = query(
      collection(db, "accounts"),
      where("email", "==", data.email),
      where("password", "==", data.password),
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      setUserData(querySnapshot.docs[0].data());
    } else {
      setDidLoginFail(true);
    }
  }

  return Object.keys(userData).length > 0 ? (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage userData={userData} />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <Login onSubmit={handleSubmit} didLoginFail={didLoginFail} />
  );
}
