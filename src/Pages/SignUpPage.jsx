import "../Components/SignIn&UpForm.css";
import { React, useState } from "react";
import { TextField, Button } from "@mui/material";
import { UserAuth } from "../Contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function SignUpPage() {
  // Setting createUser
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  // States for sign up info
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Submission Errors or Redirection to Plant Selection Page
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

  return (
    <div>
      <Navbar />
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
          {
            error != "" ? (
              <div className="error"> {error} </div>
            ) : (
              ""
            ) /*Firebase Error Message*/
          }
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

export default SignUpPage;
