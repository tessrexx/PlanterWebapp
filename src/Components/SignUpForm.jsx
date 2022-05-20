import React, { useState } from "react";
import "./SignIn&UpForm.css";
import { TextField, Button } from "@mui/material";
import SignInForm from "./SignInForm";
import { UserAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { HideImageRounded } from "@mui/icons-material";

const SignUpForm = ({ open, onClose }) => {
  // Setting createUser
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  // Submission Errors or Redirection
  const handleSubmit = async (err) => {
    err.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/plantselection");
      //signUpToggle(false)
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  //function signUpToggle(hidden)
  //{
  //  setOpenSignUp(hidden)
  //}

  if (!open) return null;
  return (
    <form onSubmit={handleSubmit}>
      <div className="background" onClick={onClose} />
      <div className="formInner">
        <img className="logo" src="/logo 184x62px.png" alt="" />
        {
          error != "" ? (
            <div className="error"> {error} </div>
          ) : (
            ""
          ) /*Firebase Error Message*/
        }
        <div className="formGroup">
          <TextField
            fullWidth
            id="filled-basic"
            label="Email"
            variant="outlined"
            type="text"
            name="email"
            // Calling a function to update setDetails by passing details entered
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <TextField
            fullWidth
            id="filled-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            // Calling a function to update setDetails by passing details entered
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <TextField
            fullWidth
            id="filled-basic"
            label="Confirm Password"
            variant="outlined"
            type="password"
            name="confirmPassword"
          />
        </div>
        <Button variant="contained" color="secondary" type="submit">
          CONFIRM
        </Button>
        <body className="signText">
          Already have an account?
          <Button onClick={() => setOpenSignIn(true)}>Sign In!</Button>
          
        </body>
      </div>
    </form>
  );
};

export default SignUpForm;
