// API Imports
import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
// MUI Library & Component Imports
import { TextField, Button, Alert } from "@mui/material";
// In-file CSS & Component Imports
import "../Components/SignIn&UpForm.css";
import { UserAuth } from "../Contexts/AuthContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { sendPasswordResetEmail } from "firebase/auth";
// Toastify Alerts
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Function for /signin page
// Contains form for user to sign in and be authenticated
function SignInPage({ setIsAuth }) {
  // Setting user
  const { signIn, auth } = UserAuth();
  const emailRef = useRef("");

  const navigate = useNavigate();
  // States for sign up info
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // create state `open` with default as false
  const [open, setOpen] = useState(false);

  // Submission Errors or Redirection to Planner Page
  const handleSubmit = async (err) => {
    err.preventDefault();
    setError("");
    try {
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

  // Forgot Password Function
  function forgotPasswordHandler() {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("nope");
      });
  }

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
            <Button disableRipple="true" onClick={() => setOpen(true)}>
              Forgot Password?
            </Button>
          </div>

          {open && (
            <div>
              <div className="popupBackground" onClick={() => setOpen(false)} />
              <div className="resetContainer">
                <h3 className="resetTitle">RESET PASSWORD</h3>
                <form className="resetModal">
                  <TextField
                    fullWidth
                    placeholder="Email"
                    type="email"
                    ref={emailRef}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={forgotPasswordHandler}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          )}
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

// Export from module
export default SignInPage;
