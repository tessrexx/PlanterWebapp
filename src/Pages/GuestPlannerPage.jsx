/* START OF IMPORTS */

// API Imports
import React from "react";
import { useState } from "react";
// MUI Library & Component Imports
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
// In-file CSS & Component Imports
import "./PlannerView.css";
import Navbar from "../Components/Navbar";
import GuestPlannerTable from "../Components/GuestPlannerTable";
import Footer from "../Components/Footer";

/* END OF IMPORTS */

// ***********************************************************

/* START OF GuestPlanner() PAGE */
// Contains the users selected plants and displays them in a yearly & monthly view
function GuestPlanner() {
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
            <Tab label="YEARLY PLANNER" value="1" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <GuestPlannerTable />
        </TabPanel>
      </TabContext>
      <div className="layout-right"></div>
      <Footer />
    </div>
  );
} /* END OF FRONT-END OUTPUT */

// Export from module
export default GuestPlanner;

/* END OF GuestPlanner() PAGE */
