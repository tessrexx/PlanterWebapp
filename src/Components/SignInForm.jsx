import React, { useState } from "react";
import { ThemeProvider, Button } from "@mui/material";
import "./SignInForm.css";

const SignInForm = ({ openSignIn, SignIn, error }) => {
  
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    SignIn(details);
  };

  return (
    <div className="background">
    <div className="centered">
    <form className = "modal" onSubmit={submitHandler}>
      <div className="formInner">
        <h2>SIGN IN</h2>
        {error != "" ? <div className="error"> {error} </div> : ""}
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            // Calling a function to update setDetails by passing details entered
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            // Calling a function to update setDetails by passing details entered
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="SIGN IN" />
        </div>
      
    </form>
    </div>
    </div>
  );
}

export default SignInForm;
