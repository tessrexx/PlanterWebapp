// API Imports
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// MUI Library & Component Imports
import { Button } from "@mui/material";
// Infile CSS & Component Imports
import "./Navbar.css";
import { UserAuth } from "../Firebase/AuthContext";

// Function for navbar component used at the top of each page
// Allows user access to sign up & sign in pages, their details, and sign out
function Navbar() {
  // Consts for user authentication & navigation
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  // Handles user logout and redirects to home page
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("Logged Out");
    } catch (e) {
      console.log(e.message);
    }
  };

  // Output
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img className="nav-logo" src="/logo 184x62px.png" alt="" />
        </Link>

        <ul className={"nav-menu"}>
          {user ? (
            <>
              <li className="user-nav">
                <Link to="/planner">
                  <img src="IconsandImages/planter.png" alt="" />
                </Link>
              </li>
              <li className="user-nav">
                <Link to="/userdetails">
                  <img src="IconsandImages/details.png" alt="" />
                </Link>
              </li>
              <li className="user-nav">
                <img
                  src="IconsandImages/signout.png"
                  alt=""
                  onClick={handleLogout}
                />
              </li>
            </>
          ) : (
            <>
              <li className="public-nav">
                <Link to="/signup">
                  <Button variant="contained" color="secondary">
                    SIGN UP
                  </Button>
                </Link>
              </li>
              <li className="public-nav">
                <Link to="/signin">
                  <Button variant="contained" color="primary">
                    SIGN IN
                  </Button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

// Export from module
export default Navbar;
