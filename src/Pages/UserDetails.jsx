// API Imports
import React, { useRef } from "react";
import { getAuth, updateEmail } from "firebase/auth";
// MUI Library & Component Imports
import { TextField, Button } from "@mui/material";
import { UserAuth } from "../Contexts/AuthContext";
// In-file CSS & Component Imports
import "./UserDetails.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Function for /userdetails page
// Contains users email address with an option to update this & their password
function UserDetails() {
  // User authentication state
  const { user } = UserAuth();
  const emailRef = useRef("");

  /*const auth = getAuth();
  updateEmail(auth.currentUser, emailRef.current.value)
    .then(() => {
      // Email updated!
      console.log("success");
    })
    .catch((error) => {
      // An error occurred
      console.log("nope");
    });*/

  // Output
  return (
    <div>
      <Navbar />
      <div className="formContainer">
        <img className="logo" src="/logo 184x62px.png" alt="" />
        <form>
          <h2>MY DETAILS</h2>

          <div className="formGroup">
            <TextField
              fullWidth
              label={user && user.email}
              ref={emailRef}
              type="text"
              name="email"
            />
          </div>
          <Button variant="contained" color="secondary" type="submit">
            SUBMIT EMAIL CHANGE
          </Button>
          <div className="formGroup">
            <TextField
              fullWidth
              label="Current Password"
              type="password"
              name="password"
            />
          </div>
          <div className="formGroup">
            <TextField
              fullWidth
              label="New Password"
              type="password"
              name="password"
            />
          </div>
          <Button variant="contained" color="secondary" type="submit">
            SUBMIT PASSWORD CHANGE
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

// Export from module
export default UserDetails;
