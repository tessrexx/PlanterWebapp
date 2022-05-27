// API Imports
import React from "react";
import { useState } from "react";
// MUI Library & Component Imports
import { Button, IconButton, Tab, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { TabContext, TabList, TabPanel } from "@mui/lab";
// In-file CSS & Component Imports
import "./PlannerView.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Function for page /planner
// Contains the users selected plants and displays them in a yearly & monthly view
function Planner() {
  // Tab selection set/state
  const [value, setValue] = useState("1");

  // Tab selection change handler function
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Output
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
        <TabPanel value="1">Planner View</TabPanel>
        <TabPanel value="2">This Month View</TabPanel>
        <TabPanel value="3">Next Month View</TabPanel>
      </TabContext>
      <Footer />
    </div>
  );
}

// Export from module
export default Planner;
