import React, { useState } from "react";
import "./SignIn&UpForm.css";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

const SignInForm = ({ openSignIn, SignIn, error }) => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    SignIn(details);
  };

  const [isOpened, openSignUp] = useState(false);

  return (
    <form className="modal" onSubmit={submitHandler}>
      <div className="background" onClick={() => openSignIn(false)} />
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
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="formGroup">
          <TextField
            fullWidth
            id="filled-basic"
            label="Password"
            variant="outlined"
            type="text"
            name="password"
            // Calling a function to update setDetails by passing details entered
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <div className="password">
          <Link to="/" >Forgot Password?</Link>
        </div>
        <Button variant="contained" color="primary" type="submit">
          SIGN IN
        </Button>
        <body className="signText">
          Don't have an account?
          <Button
                onClick={() => openSignUp(true)}              
              >
                Sign Up!
              </Button>
              {isOpened && <SignUpForm openSignUp={openSignUp} />}
        </body>
      </div>
    </form>
  );
};

export default SignInForm;
