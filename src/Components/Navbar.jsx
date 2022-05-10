//import React, { useState } from "react";
//import { Routes, Route, Link } from "react-router-dom";
//import { Button } from "@mui/material";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import "./Mixed.css";

function Navbar() {
  // Event States
  const [button] = useState(true);

  // Function Prototypes

  return (
    //React Fragments ie: empty tags containing multiple elements.
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/logo 184x62px.png" alt="" />
          </Link>

          <ul className={"nav-menu"}>
            <li className="nav-item">
              <Link to="/sign-up"></Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-in"></Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--primary">SIGN UP</Button>}
          {button && <Button buttonStyle="btn--secondary">SIGN IN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
