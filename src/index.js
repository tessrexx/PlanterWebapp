/* START OF IMPORTS */

// API Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
// MUI Library & Component Imports
import { ThemeProvider } from "@mui/material/styles";
// In-file CSS & Component Imports
import { theme } from "./Components/theme";
import "./App.css";
import App from "./App";

/* END OF IMPORTS */

// ***********************************************************

/* START OF index.js FILE */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* END OF index.js FILE */
