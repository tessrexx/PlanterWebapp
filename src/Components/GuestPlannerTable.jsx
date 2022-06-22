// API Imports
import React from "react";
import { useState } from "react";
// Temp Plant Data File Import
import plantData from "../Data/PlantInfo.json";
// MUI Library & Component Imports
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  Paper,
  TableRow,
} from "@mui/material";
// Infile CSS & Component Imports
import "./PlannerTables.css";

// Component for yearly planner view
// Displays user's selected plants, ideal planting months, and estimated harvesting times
const GuestPlannerTable = () => {
  // Filter data set/state
  const [data, setData] = useState(plantData);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "70vh" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell className="headerLabels">PLANTS</TableCell>
            <TableCell className="centerLabels">JAN</TableCell>
            <TableCell className="centerLabels">FEB</TableCell>
            <TableCell className="centerLabels">MAR</TableCell>
            <TableCell className="centerLabels">APR</TableCell>
            <TableCell className="centerLabels">MAY</TableCell>
            <TableCell className="centerLabels">JUN</TableCell>
            <TableCell className="centerLabels">JUL</TableCell>
            <TableCell className="centerLabels">AUG</TableCell>
            <TableCell className="centerLabels">SEP</TableCell>
            <TableCell className="centerLabels">OCT</TableCell>
            <TableCell className="centerLabels">NOV</TableCell>
            <TableCell className="centerLabels">DEC</TableCell>
            <TableCell className="headerLabels">HARVEST</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow>
              <TableCell className="plantName">
                <div className="imageAndNameContainer">
                  <img src={row.roundimage} alt="" className="imageContainer" />
                  {row.id}
                </div>
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={row.jan} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={row.feb} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={row.mar} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={row.apr} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={row.may} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={row.jun} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={row.jul} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={row.aug} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={row.sep} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={row.oct} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={row.nov} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={row.dec} alt="" />
              </TableCell>
              <TableCell className="harvestTime">{row.harvest}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GuestPlannerTable;
