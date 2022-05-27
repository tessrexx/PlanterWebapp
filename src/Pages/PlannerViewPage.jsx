import "./PlannerView.css";
import React from "react";
import { useState } from "react";
import { Button, IconButton, Tab, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Planner() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
export default Planner;
