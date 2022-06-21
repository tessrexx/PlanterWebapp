/* START OF IMPORTS */

// API Imports
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Temp Plant Data File Import
import plantData from "../Data/PlantInfo.json";
// Firebase/Firestore Imports
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
} from "@mui/material";
// Infile CSS & Component Imports
import "./PlannerTables.css";

/* END OF IMPORTS */

// ***********************************************************

/* START OF YearlyPlannerTable() COMPONENT */

// Component for yearly planner view
// Displays user's selected plants, ideal planting months, and estimated harvesting times
const YearlyPlannerTable = () => {
  // Array to store users plant selection from Firestore
  let [userPlants, setUserPlants] = useState([]);
  // Array to store any matched data from Firestore and JSON
  let mergeUserData = [];
  // Set above [] into mergedPlants which is called in HTML
  let [mergedPlants, setMergedPlants] = useState([]);
  // Page navigation variable
  const navigate = useNavigate();

  /* START OF BACK-END FUNCTIONS */

  // GetUserUid() function to get current user id and return in to uid variable
  const uid = GetUserUid();
  function GetUserUid() {
    const [uid, setUid] = useState("");
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUid(user.uid);
        } else {
          // Redirects to /signin page so that data can be read from user account
          navigate("/signin");
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

  // Called when page renders, calls CombineData() when userPlants[] != null
  useEffect(() => CombineData(), [userPlants]);

  // Function to compare firestore and JSON doc id's and store needed info
  function CombineData() {
    // If userPlants array contains user's firestore info, compare plantData array with userPlant array
    if (userPlants[0] != null) {
      for (let i = 0; i < plantData.length; i++) {
        for (let j = 0; j < userPlants.length; j++) {
          // If plantData ID, userPlant name matches, grab & push matching info
          if (plantData[i].id === userPlants[j].name) {
            mergeUserData.push([
              plantData[i].id,
              plantData[i].roundimage,
              plantData[i].jan,
              plantData[i].feb,
              plantData[i].mar,
              plantData[i].apr,
              plantData[i].may,
              plantData[i].jun,
              plantData[i].jul,
              plantData[i].aug,
              plantData[i].sep,
              plantData[i].oct,
              plantData[i].nov,
              plantData[i].dec,
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
            {mergedPlants.map((plant) => (
              <TableRow>
                <TableCell className="plantName">
                  <div className="imageAndNameContainer">
                    <img src={plant[1]} alt="" className="imageContainer" />
                    {plant[0]}
                  </div>
                </TableCell>
                <TableCell className="monthlyPlant">
                  <img src={plant[2]} alt="" />
                </TableCell>
                <TableCell className="monthlyPlant">
                  <img src={plant[3]} alt="" />
                </TableCell>
                <TableCell className="monthlyPlant">
                  <img src={plant[4]} alt="" />
                </TableCell>
                <TableCell className="monthlyPlant">
                  <img src={plant[5]} alt="" />
                </TableCell>
                <TableCell className="monthlyPlant">
                  <img src={plant[6]} alt="" />
                </TableCell>
                <TableCell className="monthlyPlant">
                  <img src={plant[7]} alt="" />
                </TableCell>
                <TableCell className="monthlyPlant">
                  <img src={plant[8]} alt="" />
                </TableCell>
                <TableCell className="monthlyPlant">
                  <img src={plant[9]} alt="" />
                </TableCell>
                <TableCell className="monthlyPlant">
                  <img src={plant[10]} alt="" />
                </TableCell>
                <TableCell className="monthlyPlant">
                  <img src={plant[11]} alt="" />
                </TableCell>
                <TableCell className="monthlyPlant">
                  <img src={plant[12]} alt="" />
                </TableCell>
                <TableCell className="monthlyPlant">
                  <img src={plant[13]} alt="" />
                </TableCell>
                <TableCell className="harvestTime">{plant[14]}</TableCell>
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
export default YearlyPlannerTable;

/* END OF YearlyPlannerTable() COMPONENT */
