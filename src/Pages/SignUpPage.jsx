// API Imports
import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// MUI Library & Component Imports
import { db } from "../Firebase/firebase";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { TextField, Button } from "@mui/material";
// In-file CSS & Component Imports
import "../Components/SignIn&UpForm.css";
import { UserAuth } from "../Firebase/AuthContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// Toastify Alerts
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Function for /signup page
// Contains form for user to create an account and become an authenticated user
function SignUpPage() {
  // Setting createUser
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  // States for sign up info
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const addUserToFirestore = async () => {
    try {
      await setDoc(doc(db, "users", localStorage.getItem("uid")), {
        userID: localStorage.getItem("uid"),
        userEmail: localStorage.getItem("email"),
      }).then(() => {
        onSnapshot(doc(db, "users", localStorage.getItem("uid")), (doc) => {
          console.log("Current data from LOGIN: ", doc.data());
        });
      });
      // Waiting to catch errors
    } catch (error) {
      console.error(error);
    }
  };

  // Submission Errors or Redirection to Plant Selection Page
  const handleSubmit = async (err) => {
    err.preventDefault();
    setError("");
    try {
      await createUser(email, password).then((credentials) => {
        toast.success("Welcome to Planter!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
        const user = credentials.user;
        localStorage.setItem("uid", user.uid);
        localStorage.setItem("email", user.email);
      });
      addUserToFirestore();
      navigate("/plantselection");
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      console.log(err.message);
    }
  };

  // Output
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(/IconsandImages/background.png`,
      }}
    >
      <Navbar />
      <ToastContainer
        position="top-right"
        theme="colored"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
      />

      <div className="formContainer">
        <img className="logo" src="/logo 184x62px.png" alt="" />
        <form onSubmit={handleSubmit}>
          <h2>SIGN UP TODAY!</h2>
          <p>
            Already have an account? <Link to="/signin">Sign In!</Link>
          </p>
          <div className="formGroup">
            <TextField
              fullWidth
              label="Email"
              type="text"
              name="email"
              // Calling a function to update setDetails by passing details entered
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              // Calling a function to update setDetails by passing details entered
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submitButton">
            <Button variant="contained" color="secondary" type="submit">
              CONFIRM
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

// Export from module
export default SignUpPage;
