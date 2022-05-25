import "./UserDetails.css";
import { React, useState } from "react";
import { TextField, Button } from "@mui/material";
import { UserAuth } from "../Contexts/AuthContext";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { getAuth, updateEmail } from "firebase/auth";

function UserDetails() {
  const { user } = UserAuth();
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

export default UserDetails;
