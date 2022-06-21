/* START OF IMPORTS */

// API Imports
import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// MUI Library & Component Imports
import { db } from "../Firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { TextField, Button } from "@mui/material";
// In-file CSS & Component Imports
import "./SignIn&Up.css";
import { UserAuth } from "../Firebase/AuthContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// Toastify Alerts
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* END OF IMPORTS */

// ***********************************************************

/* START OF SignUpPage() PAGE */
// Contains form for user to create an account and become an authenticated user
function SignUpPage() {
  // Setting createUser
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  // Variables for sign up info
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  /* START OF BACK-END FUNCTIONS */

  // handleSubmit function handles submission errors or redirection to Selection Page
  const handleSubmit = async (err) => {
    err.preventDefault();
    setError("");
    try {
      // Try sign up & if successful, trigger success alert and redirect to plant selection page
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
        // stores user's email & newly assigned id for adding to firestore
        const user = credentials.user;
        localStorage.setItem("uid", user.uid);
        localStorage.setItem("email", user.email);
      });
      // Calling below function to assign user info to collection
      addUserToFirestore();
      navigate("/plantselection");
    } catch (err) {
      // Catch unsuccessful sign up attempt and trigger error alert and allow user to retry
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
  }; // End of handleSubmit

  // addUserToFirestore function takes user's email & firebase auth id from local storage and add's them to the firestore collection
  const addUserToFirestore = async () => {
    try {
      // Adding info to user's firestore collection as a link to their planner
      await setDoc(doc(db, "users", localStorage.getItem("uid")), {
        userID: localStorage.getItem("uid"),
        userEmail: localStorage.getItem("email"),
      });
      // Waiting to catch errors
    } catch (error) {
      console.error(error);
    }
  }; // End of addUserToFirestore()

  /* END OF BACK-END FUNCTIONS */

  // ***********************************************************

  /* START OF FRONT-END OUTPUT */
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
/* END OF FRONT-END OUTPUT */

// Export from module
export default SignUpPage;

/* END OF SignUpPage() PAGE */
