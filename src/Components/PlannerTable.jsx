// API Imports
import React from "react";
import { useState } from "react";
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
import "./PlannerTable.css";
// Temp Plant Data File Import
import plantData from "../Data/PlantInfo.json";


const PlannerTable = () => {
  // Filter data set/state
  const [data, setData] = useState(plantData);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "64vh" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell className="headerLabels">PLANTS</TableCell>
            <TableCell className="monthLabels">JAN</TableCell>
            <TableCell className="monthLabels">FEB</TableCell>
            <TableCell className="monthLabels">MAR</TableCell>
            <TableCell className="monthLabels">APR</TableCell>
            <TableCell className="monthLabels">MAY</TableCell>
            <TableCell className="monthLabels">JUN</TableCell>
            <TableCell className="monthLabels">JUL</TableCell>
            <TableCell className="monthLabels">AUG</TableCell>
            <TableCell className="monthLabels">SEP</TableCell>
            <TableCell className="monthLabels">OCT</TableCell>
            <TableCell className="monthLabels">NOV</TableCell>
            <TableCell className="monthLabels">DEC</TableCell>
            <TableCell className="headerLabels">HARVEST</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="plantName">
                <img src={row.roundimage} alt="" className="imageContainer" />
                {row.id}
              </TableCell>    
              <TableCell className="monthlyPlantStart"><img src={row.jan} alt=""/></TableCell>
              <TableCell className="monthlyPlant"><img src={row.feb} alt=""/></TableCell>
              <TableCell className="monthlyPlant"><img src={row.mar} alt=""/></TableCell>
              <TableCell className="monthlyPlant"><img src={row.apr} alt=""/></TableCell>
              <TableCell className="monthlyPlant"><img src={row.may} alt=""/></TableCell>
              <TableCell className="monthlyPlant"><img src={row.jun} alt=""/></TableCell>
              <TableCell className="monthlyPlant"><img src={row.jul} alt=""/></TableCell>
              <TableCell className="monthlyPlant"><img src={row.aug} alt=""/></TableCell>
              <TableCell className="monthlyPlant"><img src={row.sep} alt=""/></TableCell>
              <TableCell className="monthlyPlant"><img src={row.oct} alt=""/></TableCell>
              <TableCell className="monthlyPlant"><img src={row.nov} alt=""/></TableCell>
              <TableCell className="monthlyPlantEnd"><img src={row.dec} alt=""/></TableCell>
              <TableCell className="harvestTime">{row.harvest}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlannerTable;
