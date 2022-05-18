import React, { useState } from "react";
import "./SignIn&UpForm.css";
import { TextField, Button } from "@mui/material";
import SignInForm from "./SignInForm";
import { UserAuth } from "../Contexts/AuthContext";

const SignUpForm = ({ openSignUp, SignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Setting createUser
  const { createUser } = UserAuth();

  const handleSubmit = async (err) => {
    err.preventDefault();
    setError("");
    try {
      await createUser(email, password);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  const [isOpen, openSignIn] = useState(false);

  return (
    <form className="modal" onSubmit={handleSubmit}>
      <div className="background" onClick={() => openSignUp(false)} />
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
          <Button onClick={() => openSignIn(true)}>Sign In!</Button>
          {isOpen && <SignInForm openSignIn={openSignIn} />}
        </body>
      </div>
    </form>
  );
};

export default SignUpForm;
