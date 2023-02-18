import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import DoctorList from "./components/DoctorList";
import Appointment from "./components/Appointment";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/doctor-list" element={<DoctorList></DoctorList>} />
        <Route path="/appointment" element={<Appointment></Appointment>} />
      </Routes>
    </div>
  );
}

export default App;
