import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import ReturnsPage from "./Pages/ReturnsPage/ReturnsPage";
import RejectsPage from "./Pages/RejectsPage/RejectsPage";

import NavBar from "./components/Navbar/NavBar";

import "./App.css";

function App() {
  return (
    <section className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/returns" element={<ReturnsPage />} />
          <Route path="/rejects" element={<RejectsPage />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
