import { Router, Routes, Route } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Lessons from "./views/Lessons";
import Profile from "./views/Profile";
import Navbar from "./components/Navbar.jsx"; 
import { Image } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;