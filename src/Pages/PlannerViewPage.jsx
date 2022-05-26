import "./PlannerView.css";
import React from "react";
import { Button } from "@mui/material";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Planner() {
  return (
    <div>
      <Navbar />
      <Button className="plannerTypeButton" variant="outlined" color="primary">
        PLANNER
      </Button>
      <Button className="plannerTypeButton" variant="outlined" color="primary">
        THIS MONTH
      </Button>
      <Button className="plannerTypeButton" variant="outlined" color="primary">
        NEXT MONTH
      </Button>
      <Footer />
    </div>
  );
}
export default Planner;
