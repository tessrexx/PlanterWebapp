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
  where,
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
  let [userData, setUserData] = useState([]); // **NEW

  // Called when page renders, reads user's plant selection in to userPlants[] and calls DataMash() function

  useEffect(() => {
    const getData = async () => {
      console.log("get data running");
      const q = query(collection(db, "users"), where("userID", "==", `${uid}`));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      for (let i = 0; i < data.length; i++) {
        console.log("for loop starting");
        if (data[i].id === uid) {
          setUserData(uid);
          console.log("userData test", userData);
          data.map(async (elem) => {
            console.log("get data map running");
            const plantQ = query(collection(db, `users/${elem.id}/planner`));
            const plannerDetails = await getDocs(plantQ);
            const planner = plannerDetails.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            setUserPlants(planner);
            console.log(userPlants);
          });
        }
      }
    };
    getData();
  }, [uid]);

  useEffect(() => DataMash(), [userPlants]);

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
// Export from module
export default YearlyPlannerTable;
