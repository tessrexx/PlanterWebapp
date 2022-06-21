// API Imports
import React from "react";
// MUI Library & Component Imports
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
// In-file CSS & Component Imports
import "./HomePage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HomeCard from "../Components/HomeCard";

// Function for home page
// Displays app features
function HomePage() {
  //Output
  return (
    <>
      <div
        className="background"
        style={{
          backgroundImage: `url(/IconsandImages/background.png`,
        }}
      ></div>
      <Navbar />
      <div className="infoBlurb">
        <h1>The New Zealand Plant Planner made for you</h1>
        <p className="blurb">
          Create your custom planter from our range of vegetable, fruit, and
          herb plants and view their ideal planting months in your own yearly
          planner
        </p>
      </div>
      <div className="cardContainer">
        <div className="homeCardContainer">
          <HomeCard
            image={"IconsandImages/yearlyplanner.png"}
            title={"YEARLY PLANNER"}
            info={
              "View the planting months for your favourite fruit and vegetables all year round"
            }
          />
        </div>
        <div className="homeCardContainer">
          <HomeCard
            image={"IconsandImages/selection.png"}
            title={"EDIT AND SORT"}
            info={
              "Edit your Planter at any time and sort through our simple lists to find the plants you want"
            }
          />
        </div>
        <HomeCard
          image={"IconsandImages/monthlyplanner.png"}
          title={"MONTHLY PLANNING"}
          info={
            "View the current and next month's planting schedule along with some helpful tips"
          }
        />
      </div>
      <Footer />
    </>
  );
}

// Export from module
export default HomePage;
