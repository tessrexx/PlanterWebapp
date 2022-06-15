// API Imports
import React from "react";
import { useState, useEffect } from "react";
// Firebase/Firestore Import
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
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
import "./YearlyPlannerTable.css";

// Component for yearly planner view
// Displays user's selected plants, ideal planting months, and estimated harvesting times
const YearlyPlannerTable = () => {
  // Data set/state
  const [userPlants, setUserPlants] = useState([]);

  // Firestore database variable
  const plantCollectionRef = collection(db, "plants");
  const userSelectionRef = collection(db, "users"); // ***** DEBUGGING NEEDED

  // Get current user id and return in to const
  const uid = GetUserUid();
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
  }

  // Called when page renders // ***** DEBUGGING NEEDED
  useEffect(() => {
    const fetchUserPlants = async () => {
      const data = await getDocs(userSelectionRef);
      setUserPlants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchUserPlants();
  }, []);

  // Output
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
          {userPlants.map((plant) => (
            <TableRow>
              <TableCell className="plantName">
                <div className="imageAndNameContainer">
                  <img src={""} alt="" className="imageContainer" />
                  {plant.name}
                </div>
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={""} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={""} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={""} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={""} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={""} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={""} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={""} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={""} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={""} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={""} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={""} alt="" />
              </TableCell>
              <TableCell className="monthlyPlant">
                <img src={""} alt="" />
              </TableCell>
              <TableCell className="harvestTime">{""}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Export from module
export default YearlyPlannerTable;
