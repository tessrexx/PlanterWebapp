/* START OF IMPORTS */

// API Imports
import React from "react";
// In-file CSS & Component Imports
import "./HomePage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HomeCard from "../Components/HomeCard";
/* END OF IMPORTS */

// ***********************************************************

/* START OF HomePage() PAGE */
// Displays app features
function HomePage() {
  /* START OF FRONT-END OUTPUT */
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
            title={"EDIT AND SEARCH"}
            info={
              "Edit your Planter at any time and use the search bar to find the plants you want"
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
/* END OF FRONT-END OUTPUT */

// Export from module
export default HomePage;

/* END OF HomePage() PAGE */
