import "./App.css";
import React, { useState } from "react";
import HomePage from "./Pages/HomePage";
import PlantSelection from "./Pages/PlantSelectionPage";
import Planner from "./Pages/PlannerViewPage";
import { Routes, Route, Router } from "react-router-dom";
import TempAccessButtons from "./TempAccessButtons";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SignInForm from "./Components/SignInForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
