/* START OF IMPORTS */

// API Imports
import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
// MUI Library & Component Imports
import { TextField, Button } from "@mui/material";
// In-file CSS & Component Imports
import "./SignIn&Up.css";
import { UserAuth } from "../Firebase/AuthContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { sendPasswordResetEmail } from "firebase/auth";
// Toastify Alerts
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* END OF IMPORTS */

// ***********************************************************

/* START OF SignInPage() PAGE */
// Contains form for user to sign in and be authenticated
function SignInPage({ setIsAuth }) {
  // Setting user variables
  const { signIn, forgotPassword } = UserAuth();
  const emailRef = useRef();
  const navigate = useNavigate();
  // Variables for sign up info
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  /* START OF BACK-END FUNCTIONS */

  // handleSubmit function handles submission errors or redirection to Planner Page
  const handleSubmit = async (err) => {
    err.preventDefault();
    setError("");
    try {
      // Try sign in & if successful, trigger success alert and redirect to planner page
      await signIn(email, password);
      toast.success("Welcome back!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      navigate("/planner");
    } catch (err) {
      // Catch unsuccessful sign in attempt and trigger error alert and allow user to retry
      toast.error(err.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  }; // End of handleSubmit

  // forgotPasswordHandler function for user to have password reset email sent
  const forgotPasswordHandler = async (err) => {
    try {
      // Gets email textfield value and if email is valid, sends email and triggers success alert
      await forgotPassword(email).then(() => {
        toast.success("Password reset sent. Please check your email", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      });
    } catch (err) {
      // Catches invalid email address, triggers error alert and
      toast.error("Invalid Email", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  }; // End of forgotPasswordHandler

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
          <h2>SIGN IN</h2>
          <p>
            Don't have an account? <Link to="/signup">Sign Up!</Link>
          </p>
          <div className="formGroup">
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
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
              // Calling a function to update setDetails by passing details entered
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forgotPassword">
            <Button disableRipple="true" onClick={forgotPasswordHandler}>
              Forgot Password?
            </Button>
          </div>
          <div className="submitButton">
            <Button variant="contained" color="secondary" type="submit">
              SIGN IN
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
/* START OF FRONT-END OUTPUT */

// Export from module
export default SignInPage;

/* END OF SignInPage() PAGE */
