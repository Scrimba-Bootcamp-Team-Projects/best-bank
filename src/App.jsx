import React from "react"
import Header from "./components/Header/Header";
import Login from './pages/Login'
import HomePage from "./pages/HomePage";
import Payments from "./pages/Payments";
import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App() {
  const [userData, setUserData] = React.useState({})

  console.log(userData)

  function handleSubmit(data){
    setUserData(prevUser =>({
      ...prevUser,
      ...data
    }))
  }


  return Object.keys(userData).length > 0 ? (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payments" element={<Payments />} />
      </Routes>
    </BrowserRouter>
  ):
  (<Login 
  onSubmit={handleSubmit}/>)
}
