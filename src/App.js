import "./App.css";
import React from "react";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import SignInPage from "./Pages/SignInPage";
import PlantSelection from "./Pages/PlantSelectionPage";
import Planner from "./Pages/PlannerViewPage";
import { Routes, Route, Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { AuthContextProvider } from "./Contexts/AuthContext";
import PageLayout from "./Components/PageLayout";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/plantselection" element={<PlantSelection />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/layout" element={<PageLayout />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

// <Navbar />  <Footer />
