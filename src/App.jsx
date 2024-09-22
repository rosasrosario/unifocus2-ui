import { Router, Routes, Route } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Clases from "./views/Clases";
import Navbar from "./components/Navbar.jsx"; // Asegúrate de que esta importación sea correcta
import { Image } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/clases" element={<Clases />} />
      </Routes>
    </>
  );
}

export default App;