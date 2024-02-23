import React from "react";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Payments from "./pages/Payments";
import Logout from "./components/Logout/Logout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "./config/firebase";

export default function App() {
  const [userData, setUserData] = React.useState([]);
  const [didLoginFail, setDidLoginFail] = React.useState(false);
  const [logOut, setLogOut]= React.useState(false)

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

  function displayLogout(){
   setLogOut(prevLogout=>!prevLogout)
  }

  function handleLogout(){
    setUserData([])
    setLogOut(prevLogout=>!prevLogout)

  }

  function cancelLogout(){
    setLogOut(prevLogout=>!prevLogout)
  } 

  return Object.keys(userData).length > 0 ? (
    <BrowserRouter>
      <Header 
      onLogout={displayLogout}/>
      {logOut && <Logout 
      onYesClick={handleLogout}
      onNoClick={cancelLogout}/>}
      <Routes>
        <Route path="/" element={<HomePage userData={userData} />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <Login onSubmit={handleSubmit} didLoginFail={didLoginFail} />
  );
}
