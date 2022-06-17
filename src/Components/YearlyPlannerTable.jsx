// API Imports
import React from "react";
import { useState, useEffect } from "react";
// Temp Plant Data File Import
import plantData from "../Data/PlantInfo.json";
// Firebase/Firestore Import
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
  query,
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
import { useMemo } from "react";
// Component for yearly planner view
// Displays user's selected plants, ideal planting months, and estimated harvesting times
const YearlyPlannerTable = () => {
  // Filter data set/state
  const [data, setData] = useState(plantData);

  // Firestore database variable
  const plantCollectionRef = collection(db, "plants");
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

  let [userPlants, setUserPlants] = useState([]); // array to store users plant selection from Firestore
  let mergeUserData = []; // array to store any matched data from Firestore and JSON
  let [mergedPlants, setMergedPlants] = useState([]); // set above [] into mergedPlants which is called in HTML

  // Called when page renders, reads user's plant selection in to userPlants[] and calls DataMash() function
  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "users"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      data.map(async (elem) => {
        const plantQ = query(collection(db, `users/${elem.id}/planner`));
        const plannerDetails = await getDocs(plantQ);
        const planner = plannerDetails.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserPlants(planner);
        console.log(userPlants);
      });
    };
    getData();
    console.log("getting data");
    DataMash();
  }, []);

  // ** TESTING how to compare firestore and JSON doc id's and display info
  function DataMash() {
    console.log("DataMash Run...");
    if (userPlants[0] != null) {
      console.log(" Run FOR LOOP...");
      for (let i = 0; i < plantData.length; i++) {
        for (let j = 0; j < userPlants.length; j++) {
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
            //console.log(mergeUserData);
          } else {
            console.log("IF statement complete");
          }
        }
      }
      const temp = [...mergeUserData];
      setMergedPlants(temp);
      console.log(temp);
      //console.log(mergedPlants)
    } else {
      console.log("userPlants[0] == null"); // no data currently stored in userPlants[] array
    }
  }

  // Output
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
                    <img src={""} alt="" className="imageContainer" />
                    {plant[0]}
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
                <TableCell className="harvestTime">{plant[14]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
// Export from module
export default YearlyPlannerTable;
