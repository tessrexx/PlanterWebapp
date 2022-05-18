import React, { useState } from "react";
import "./SignIn&UpForm.css";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import { UserAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignInForm = ({ open, onClose }) => {
  const { signIn } = UserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [openSignUp, setOpenSignUp] = useState(false);

  // Submission Errors or Redirection
  const handleSubmit = async (err) => {
    err.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/planner");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  if (!open) return null;

  return (
    <form onSubmit={handleSubmit}>
      <div className="background" onClick={onClose} />
      <div className="formInner">
        <img className="logo" src="/logo 184x62px.png" alt="" />
        {error != "" ? <div className="error"> {error} </div> : ""}
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
        <div className="forgotPassword">
          <Link to="/">Forgot Password?</Link>
        </div>

        <Button variant="contained" color="primary" type="submit">
          SIGN IN
        </Button>
        <body className="signText">
          Don't have an account?
          <Button onClick={() => setOpenSignUp(true)}>Sign Up!</Button>
        </body>
      </div>
    </form>
  );
};

export default SignInForm;
