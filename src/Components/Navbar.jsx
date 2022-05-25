import React from "react";
import "./Navbar.css";
import theme from "./theme";
import { ThemeProvider, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Contexts/AuthContext";
import { auth } from "../firebase";

function Navbar() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("Logged Out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img className="nav-logo" src="/logo 184x62px.png" alt="" />
        </Link>

        <ul className={"nav-menu"}>
          {user ? (
            <li>
              <Button onClick={handleLogout}>SIGN OUT</Button>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/signup">
                  <Button variant="contained" color="secondary">
                    SIGN UP
                  </Button>
                </Link>
              </li>
              <li className="nav-item">
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

export default Navbar;
