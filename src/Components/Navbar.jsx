import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="navbar-container"></div>
      <Link to="/" className="navbar-logo">
        <img src="/logo 184x62px.png" alt="" />
      </Link>
    </nav>
  );
}
