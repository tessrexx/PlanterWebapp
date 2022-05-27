// API Imports
import React from "react";
import { Routes, Route } from "react-router-dom";
// In-file CSS & Component Imports
import "./App.css";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import SignInPage from "./Pages/SignInPage";
import PlantSelection from "./Pages/PlantSelectionPage";
import Planner from "./Pages/PlannerViewPage";
import UserDetails from "./Pages/UserDetails";
import { AuthContextProvider } from "./Contexts/AuthContext";

// App function
// Contains routing for each page used in app
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
          <Route path="/userdetails" element={<UserDetails />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
