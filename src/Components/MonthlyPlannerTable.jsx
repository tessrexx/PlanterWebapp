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
import { IconButton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// Infile CSS & Component Imports
import "./YearlyPlannerTable.css";

// Component for monthly planner view
// Displays user's selected plants, ideal planting months, and estimated harvesting times
const MonthlyPlannerTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "70vh" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell className="headerLabels">PLANTS</TableCell>
            <TableCell className="centerLabels">
              PLANTING RECOMMENDATION
            </TableCell>
            <TableCell className="infoIconColumn"></TableCell>
            <TableCell className="headerLabels">HARVEST</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className="plantName">
              <img
                src="plantImages/appleround.png"
                alt=""
                className="imageContainer"
              />
              Apple
            </TableCell>
            <TableCell className="plantTips">
              Plant seeds directly in the garden after a month and a half of
              cold stratification
            </TableCell>
            <TableCell className="plantTips">
              <IconButton disableRipple>
                <InfoOutlinedIcon className="infoIcon" />
              </IconButton>
            </TableCell>
            <TableCell className="harvestTime">2 - 4 years</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="plantName">
              <img
                src="plantImages/blackberryround.png"
                alt=""
                className="imageContainer"
              />
              Blackbery
            </TableCell>
            <TableCell className="plantTips">
              Plant seeds into seed trays after 3 - 4 months of cold
              stratification
            </TableCell>
            <TableCell className="plantTips">
              <IconButton disableRipple>
                <InfoOutlinedIcon className="infoIcon" />
              </IconButton>
            </TableCell>
            <TableCell className="harvestTime">1 - 2 years</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="plantName">
              <img
                src="plantImages/blueberryround.png"
                alt=""
                className="imageContainer"
              />
              Blueberry
            </TableCell>
            <TableCell className="plantTips">
              Plant seeds into seed trays after 3 months of cold stratification
            </TableCell>
            <TableCell className="plantTips">
              <IconButton disableRipple>
                <InfoOutlinedIcon className="infoIcon" />
              </IconButton>
            </TableCell>
            <TableCell className="harvestTime">1 - 2 years</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MonthlyPlannerTable;
