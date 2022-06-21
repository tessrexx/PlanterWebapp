/* START OF IMPORTS */

// API Imports
import React from "react";
import { useState, useEffect } from "react";
// Plant Data File Import
import plantData from "../Data/PlantInfo.json";
// Firebase/Firestore Import
import { auth, db } from "../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
// MUI Library & Component Imports
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  Paper,
  TableRow,
  Accordion,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// Infile CSS & Component Imports
import "./PlannerTables.css";

/* END OF IMPORTS */

// ***********************************************************

/* START OF ThisMonthTable() COMPONENT */

// Component for monthly planner view
// Displays user's selected plants for this month, planting tips, and estimated harvesting times
const ThisMonthTable = () => {
  // Array to store users plant selection from Firestore
  let [userPlants, setUserPlants] = useState([]);
  // Array to store any matched data from Firestore and JSON
  let mergeUserData = [];
  // Set above [] into mergedPlants which is called in HTML
  let [mergedPlants, setMergedPlants] = useState([]);
  // Get & store user ID variable
  const uid = GetUserUid();
  // Get & store this month name variable
  const thisMonth = GetCurrentMonth();

  /* START OF BACK-END FUNCTIONS */

  // GetUserUid() function to get current user id and return in to uid variable
  function GetUserUid() {
    const [uid, setUid] = useState("");
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }, []);
    return uid;
  } // End of GetUserUid()

  // Called when page renders, reads user's plant selection in to userPlants[]
  useEffect(() => {
    const getData = async () => {
      // Variables that get user planner info
      const q = query(collection(db, "users"), where("userID", "==", `${uid}`));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // Getting plant data from matching user
      for (let i = 0; i < data.length; i++) {
        // Compare data ID to user ID, on match set userPlants[]
        if (data[i].id === uid) {
          data.map(async (elem) => {
            const plantQ = query(collection(db, `users/${elem.id}/planner`));
            const plannerDetails = await getDocs(plantQ);
            const planner = plannerDetails.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            setUserPlants(planner);
          });
        }
      }
    };
    getData();
  }, [uid]); // End of useEffect

  // GetCurrentMonth() function to get this month and convert to string
  function GetCurrentMonth() {
    const [thisMonth, setThisMonth] = useState("");
    useEffect(() => {
      // Short strings for getMonth numerical conversion
      const month = [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
      ];
      const d = new Date();
      setThisMonth(month[d.getMonth()]);
    }, []);
    return thisMonth;
  } // End of GetThisMonth()

  // Called when page renders, calls CombineData() when userPlants[] != null
  useEffect(() => CombineData(), [userPlants]);

  /* ** IN PROGRESS
  for (let i = 0; i < plantData.length; i++) {
        for (let k = 0; k < plantData.plantingMonths.length; k++){
          for (let j = 0; j < userPlants.length; j++) {
           if (plantData[i].id === userPlants[j].name && plantData[k].plantingMonths[k] === thisMonth)
  */

  // Function to compare firestore and JSON doc id's and store needed info ** IN PROGRESS
  function CombineData() {
    // If userPlants array contains user's firestore info, compare plantData array with userPlant array
    if (userPlants[0] != null) {
      for (let i = 0; i < plantData.length; i++) {
        for (let j = 0; j < userPlants.length; j++) {
          // If plantData ID, userPlant name matches, & the current month matches the plants planting month, grab & push matching info
          if (
            plantData[i].id === userPlants[j].name &&
            plantData[i].plantingMonth === thisMonth
          ) {
            mergeUserData.push([
              plantData[i].id,
              plantData[i].roundimage,
              plantData[i].plantingRecommendation,
              plantData[i].generalInfo1,
              plantData[i].generalInfo2,
              plantData[i].generalInfo3,
              plantData[i].generalInfo4,
              plantData[i].harvest,
            ]);
          }
        }
      }
      // Set mergedPlants array
      setMergedPlants([...mergeUserData]);
    }
  } // End of CombineData()

  /* END OF BACK-END FUNCTIONS */

  // ***********************************************************

  /* START OF FRONT-END OUTPUT */
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
            {mergedPlants.map((column) => (
              <TableRow>
                <TableCell className="plantName">
                  <div className="imageAndNameContainer">
                    <img src={column[1]} alt="" className="imageContainer" />
                    {column[0]}
                  </div>
                </TableCell>
                <TableCell className="plantTips">
                  <Accordion>
                    <AccordionSummary
                      className="plantTips"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      {column[2]}
                    </AccordionSummary>
                    <AccordionDetails className="plantTips">
                      <Divider>
                        <h3 className="helpfulTitle">HELPFUL TIPS</h3>
                      </Divider>
                      {column[3]}
                      <Divider className="tipDiv" />
                      {column[4]}
                      <Divider variant="middle" className="tipDiv" />
                      {column[5]}
                      <Divider variant="middle" className="tipDiv" />
                      {column[6]}
                      <Divider variant="middle" className="tipDiv" />
                    </AccordionDetails>
                  </Accordion>
                </TableCell>
                <TableCell className="harvestTime">{column[7]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
/* END OF FRONT-END OUTPUT */

// Export from module
export default ThisMonthTable;

/* END OF ThisMonthTable() COMPONENT */
