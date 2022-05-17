import React, { useState } from "react";
import "./SignIn&UpForm.css";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import SignInForm from "./SignInForm";

const SignUpForm = ({ openSignUp, SignUp, error }) => {
  const [details, setDetails] = useState({
    email: "",
    confirmEmail: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    SignUp(details);
  };

  const [isOpen, openSignIn] = useState(false);

  return (
    <form className="modal" onSubmit={submitHandler}>
      <div className="background" onClick={() => openSignUp(false)} />
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
            label="Confirm Email"
            variant="outlined"
            type="text"
            name="confirmEmail"
            // Calling a function to update setDetails by passing details entered
            onChange={(e) =>
              setDetails({ ...details, confirmEmail: e.target.value })
            }
            value={details.confirmEmail}
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
        <Button variant="contained" color="secondary" type="submit">
          CONFIRM
        </Button>
        <body className="signText">
          Already have an account?
              <Button
                onClick={() => openSignIn(true)}
              >
                Sign In!
              </Button>
              {isOpen && <SignInForm openSignIn={openSignIn} />}        
        </body>
      </div>
    </form>
  );
};

export default SignUpForm;
