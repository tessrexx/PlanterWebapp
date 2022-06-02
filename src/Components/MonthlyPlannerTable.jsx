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
  IconButton,
  Accordion,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// Infile CSS & Component Imports
import "./YearlyPlannerTable.css";
import InfoModal from "./InfoModal";
import { ExpandMore } from "@mui/icons-material";

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
              <TableCell className="headerLabels">HARVEST</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow>
                <TableCell className="plantName">
                  <div className="imageAndNameContainer">
                    <img
                      src={row.roundimage}
                      alt=""
                      className="imageContainer"
                    />

                    {row.id}
                  </div>
                </TableCell>
                <TableCell className="plantTips">
                  <Accordion>
                    <AccordionSummary
                      className="plantTips"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      {row.plantingRecommendation}
                    </AccordionSummary>
                    <AccordionDetails className="plantTips">
                      <Divider>
                        <h3 className="helpfulTitle">HELPFUL TIPS</h3>
                      </Divider>
                      {row.generalInfo1}
                      <Divider className="tipDiv" />
                      {row.generalInfo2}
                      <Divider variant="middle" className="tipDiv" />
                      {row.generalInfo3}
                      <Divider variant="middle" className="tipDiv" />
                      {row.generalInfo4}
                      <Divider variant="middle" className="tipDiv" />
                      {row.generalInfo5}
                      <Divider variant="middle" className="tipDiv" />
                    </AccordionDetails>
                  </Accordion>
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
