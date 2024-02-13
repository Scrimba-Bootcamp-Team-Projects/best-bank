import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import Payments from "./pages/Payments";
import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payments" element={<Payments />} />
      </Routes>
    </BrowserRouter>
  );
}
