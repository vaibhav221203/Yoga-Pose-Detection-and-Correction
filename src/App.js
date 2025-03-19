import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PasswordSignUp from "./auth/PasswordSignUp";
import Signin from "./auth/signin"
import Camera from './CameraPage';
import HomePage from "./HomePage";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<PasswordSignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </Router>
  );
}

export default App;
