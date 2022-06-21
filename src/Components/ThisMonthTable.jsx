// API Imports
import React from "react";
import { useState, useEffect } from "react";
// Plant Data File Import
import plantData from "../Data/PlantInfo.json";
// Firebase/Firestore Import
import { auth, db } from "../Firebase/firebase";
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
  Accordion,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// Infile CSS & Component Imports
import "./YearlyPlannerTable.css";

// Component for monthly planner view
// Displays user's selected plants, ideal planting months, and estimated harvesting times
const ThisMonthTable = () => {
  // Filter data set/state
  const [data, setData] = useState(plantData);
  let [userPlants, setUserPlants] = useState([]); // array to store users plant selection from Firestore
  let mergeUserData = []; // array to store any matched data from Firestore and JSON
  let [mergedPlants, setMergedPlants] = useState([]); // set above [] into mergedPlants which is called in HTML
  let [userData, setUserData] = useState([]); // store current user's firebase id

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

  // Called when page renders, reads user's plant selection in to userPlants[]
  useEffect(() => {
    const getData = async () => {
      console.log("get data running");
      const q = query(collection(db, "users"), where("userID", "==", `${uid}`));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // getting plant data from matching user
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

  const thisMonth = GetCurrentMonth();
  function GetCurrentMonth(){
    const [thisMonth, setThisMonth] = useState("");
    useEffect(() => {
      const month = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
      const d = new Date();
      setThisMonth(month[d.getMonth()]);  
      console.log(thisMonth) // reading jun
      },[]);
    return thisMonth;
  }

  // Function to compare firestore and JSON doc id's and store needed info
  function CombineData() {
    console.log("CombineData Run...");
    if (userPlants[0] != null) {
      console.log(" Run FOR LOOP...");
      for (let i = 0; i < plantData.length; i++) {
        for (let k = 0; k < plantData.plantingMonths.length; k++){
          for (let j = 0; j < userPlants.length; j++) {
           if (plantData[i].id === userPlants[j].name && plantData[k].plantingMonths[k] === thisMonth) {
            mergeUserData.push([
              plantData[i].id,
              plantData[i].roundimage,
              plantData[i].plantingRecommendation,
              plantData[i].generalInfo1,
              plantData[i].generalInfo2,
              plantData[i].generalInfo3,
              plantData[i].generalInfo4,
              plantData[i].harvest
            ]);
            //console.log(mergeUserData);
          } else {
            console.log("IF statement complete");
          }
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

  // Called when page renders, calls CombineData() when userPlants[] != null
  useEffect(() => CombineData(), [userPlants]);

  // Output
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

// Export from module
export default ThisMonthTable;
