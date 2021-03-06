/* START OF IMPORTS */

// API Imports
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// MUI Library & Component Imports
import { Button, Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
// In-file CSS & Component Imports
import "./PlannerView.css";
import Navbar from "../Components/Navbar";
import YearlyPlannerTable from "../Components/YearlyPlannerTable";
import ThisMonthTable from "../Components/ThisMonthTable";
import NextMonthTable from "../Components/NextMonthTable";
import Footer from "../Components/Footer";
import FlipCard from "../Components/FlipCard";

/* END OF IMPORTS */

// ***********************************************************

/* START OF Planner() PAGE */
// Contains the users selected plants and displays them in a yearly & monthly view
function Planner() {
  // Tab selection set/state
  const [value, setValue] = useState("1");

  /* START OF BACK-END FUNCTIONS */

  // handleChange function handles when yearly or monthly planner tabs clicked
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; // End of handleChange

  /* END OF BACK-END FUNCTIONS */

  // ***********************************************************

  /* START OF FRONT-END OUTPUT */
  return (
    <div>
      <Navbar />
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange}>
            <Tab label="PLANNER" value="1" />
            <Tab label="THIS MONTH" value="2" />
            <Tab label="NEXT MONTH" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <YearlyPlannerTable />
        </TabPanel>
        <TabPanel value="2">
          <ThisMonthTable />
        </TabPanel>
        <TabPanel value="3">
          <NextMonthTable />
        </TabPanel>
        <div className="flipCardContainer">
          <FlipCard
            image={"IconsandImages/seedgarden.png"}
            title={"SEED GARDEN PLANTING"}
            information={
              <p>
                Plant all seeds twice as deep as their size
                <br />
                <br />
                Make sure they don't dry out during germination and give them a
                good watering
                <br />
                <br />
                Too much water can be a problem, so soil should feel wet as a
                sponge that's been wrung out
              </p>
            }
          />
          <FlipCard
            image={"IconsandImages/seedtray.png"}
            title={"SEED TRAY PLANTING"}
            information={
              <p>
                Plant all seeds twice as deep as their size in some vegetable
                potting mix
                <br />
                <br />
                Make sure they don't dry out during germination and give them a
                good watering
                <br />
                <br />
                Soil should feel wet as a sponge that's been wrung out
              </p>
            }
          />
          <FlipCard
            image={"IconsandImages/transplantgarden.png"}
            title={"TRANSPLANT TO GARDEN"}
            information={
              <p>
                Dig a hole twice the depth and width of the root ball of your
                plant
                <br />
                <br />
                Partly fill the hole with Vegetable Mix
                <br />
                <br />
                Gently loosen the root ball of your plant and position the plant
                in the centre of the hole
                <br />
                <br />
                Fill in with Vegetable Mix and press soil gently around the base
                of the plant
                <br />
                <br />
                Water your plant well
              </p>
            }
          />
          <FlipCard
            image={"IconsandImages/transplantpot.png"}
            title={"TRANSPLANT TO POTS"}
            information={
              <p>
                Partly fill your container with Vegetable Mix
                <br />
                <br />
                Gently loosen the root ball of your plant and position the plant
                in the container
                <br />
                <br />
                Fill your container with Vegetable Mix up to 3cm from the top
                and press soil gently around the base of the plant
                <br />
                <br />
                Water your plant well
              </p>
            }
          />
        </div>
      </TabContext>
      <div className="layout-right">
        <Link to="/plantselection" className="editButton">
          <Button variant="contained" color="secondary">
            EDIT PLANTER
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
} /* END OF FRONT-END OUTPUT */

// Export from module
export default Planner;

/* END OF Planner() PAGE */
