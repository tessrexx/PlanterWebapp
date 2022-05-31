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
import { makeStyles } from "@material-ui/styles";
import "./PlannerTable.css";
// Temp Plant Data File Import
import plantData from "../Data/PlantInfo.json";
import theme from "./theme";
import { CenterFocusStrong } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  TableContainer: { borderRadius: 15 },
}));

const PlannerTable = () => {
  // Filter data set/state
  const [data, setData] = useState(plantData);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "64vh" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell className="headerLabels">PLANTS</TableCell>
            <TableCell>PLANTING MONTHS</TableCell>
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
              <TableCell>{row.months}</TableCell>
              <TableCell>{row.harvest}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlannerTable;
