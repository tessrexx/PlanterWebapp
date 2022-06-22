/* START OF IMPORTS */

// API Imports
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// MUI Library & Component Imports
import { Button, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import GrassIcon from "@mui/icons-material/Grass";
// Infile CSS & Component Imports
import "./Navbar.css";
import { UserAuth } from "../Firebase/AuthContext";

/* END OF IMPORTS */

// ***********************************************************

/* START OF Navbar() COMPONENT */

// Function for navbar component used at the top of each page
// Allows user access to sign up & sign in pages, their details, and sign out
function Navbar() {
  // Variables for user authentication & navigation
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  /* START OF BACK-END FUNCTIONS */

  // handleLogout function handle user redirection on Logout
  const handleLogout = async () => {
    try {
      // Waits on logout() from AuthContext.js then redirects to home page
      await logout();
      navigate("/");
      console.log("Logged Out");
    } catch (e) {
      // Waiting to catch errors
      console.log(e.message);
    }
  }; // End of handleLogout

  /* END OF BACK-END FUNCTIONS */

  // ***********************************************************

  /* START OF FRONT-END OUTPUT */
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
                  <Button variant="contained">
                    <GrassIcon
                      className="icon"
                      color="#ffffff"
                      fontSize="medium"
                    />
                    Planter
                  </Button>
                </Link>
              </li>
              <li className="user-nav">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleLogout}
                >
                  <LogoutIcon
                    className="icon"
                    color="#ffffff"
                    fontSize="medium"
                  />
                  Sign Out
                </Button>
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
/* END OF FRONT-END OUTPUT */

// Export from module
export default Navbar;

/* END OF Navbar() COMPONENT */
