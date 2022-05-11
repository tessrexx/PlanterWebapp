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
  // Default login info
  const testUser = {
    email: "test@test.com",
    password: "123",
  };

  // Arrays
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const SignIn = (details) => {
    console.log(details);

    if (
      details.email == testUser.email &&
      details.password == testUser.password
    ) {
      console.log("Logged In");
    } else {
      console.log("Invalid Info");
      setError("Invalid Info");
    }
  };

  const Logout = () => {
    console.log("Logout");
  };

  return (
    <div className="App">
      <Navbar />
      <SignInForm SignIn={SignIn} error={error} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
