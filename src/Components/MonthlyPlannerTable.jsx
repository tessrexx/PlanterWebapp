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
import InfoModal from "./InfoModal";

// Component for monthly planner view
// Displays user's selected plants, ideal planting months, and estimated harvesting times
const MonthlyPlannerTable = () => {
  const [open, setOpen] = useState(false);
  // Filter data set/state
  const [data, setData] = useState(plantData);

  return (
    <>
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
            {data.map((row) => (
              <TableRow>
                <TableCell className="plantName">
                  <img src={row.roundimage} alt="" className="imageContainer" />
                  {row.id}
                </TableCell>

                <TableCell className="plantTips">
                  {row.plantingRecommendation}
                </TableCell>

                <TableCell className="plantTips">
                  <IconButton disableRipple onClick={() => setOpen(true)}>
                    <InfoOutlinedIcon className="infoIcon" />
                  </IconButton>
                </TableCell>

                <TableCell className="harvestTime">{row.harvest}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {open && <InfoModal setOpen={setOpen} />}
    </>
  );
};

export default MonthlyPlannerTable;
