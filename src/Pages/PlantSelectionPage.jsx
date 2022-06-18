// API Imports
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
} from "firebase/firestore";
// MUI Library & Component Imports
import { Button, Tab, Box, Hidden } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
// Infile CSS & Component Imports
import "./PlantSelection.css";
import "../Components/PageLayout.css";
import PlantCard from "../Components/PlantCard";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

// Function for page /plantselection
// Contains plants that users can select for their planner along with category filter tabs
function PlantSelection() {
  // Filter data set/state
  const [data, setData] = useState(plantData);
  // Data set/state
  const [plants, setPlants] = useState([]);
  // Firestore database variable
  const plantCollectionRef = collection(db, "plants");
  // Tab selection set/state
  const [value, setValue] = useState("1");

  // Filter data function
  const filterResult = (plantTypes) => {
    const result = plantData.filter((currentData) => {
      return currentData.type === plantTypes;
    });
    setData(result);
  };

  // Called when page renders
  /*useEffect(() => {
    const fetchPlants = async () => {
      const data = await getDocs(plantCollectionRef);
      setPlants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchPlants();
  }, []);*/

  // Tab selection change handler function
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  // Add selected plant to user's planner collection

  const addToPlanner = async (
    plant,
    plantImage,
    plantRoundImage,
    plantType,
    plantHarvest,
    plantJanImage,
    plantFebImage,
    plantMarImage,
    plantAprImage,
    plantMayImage,
    plantJunImage,
    plantJulImage,
    plantAugImage,
    plantSepImage,
    plantOctImage,
    plantNovImage,
    plantDecImage,
    plantRecc,
    plantInfo1,
    plantInfo2,
    plantInfo3,
    plantInfo4
  ) => {
    try {
      console.log(plant);

      await setDoc(doc(db, "users", uid, "planner", plant), {
        name: plant,
        image: plantImage,
        roundimage: plantRoundImage,
        type: plantType,
        harvest: plantHarvest,
        jan: plantJanImage,
        feb: plantFebImage,
        mar: plantMarImage,
        apr: plantAprImage,
        may: plantMayImage,
        jun: plantJunImage,
        jul: plantJulImage,
        aug: plantAugImage,
        sep: plantSepImage,
        oct: plantOctImage,
        nov: plantNovImage,
        dec: plantDecImage,
        plantingRecc: plantRecc,
        plantInfo1: plantInfo1,
        plantInfo2: plantInfo2,
        plantInfo3: plantInfo3,
        plantInfo4: plantInfo4,
      }).then(() => {
        onSnapshot(doc(db, "users", uid, "planner", plant), (doc) => {
          console.log("record added");
        });
      });
      // Waiting to catch errors
    } catch (error) {
      console.error(error);
    }
  };

  // Output
  return (
    <div className="layout-container">
      <Navbar />
      <div>
        <div className="layout-main">
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange}>
                <Tab label="ALL" value="1" onClick={() => setData(plantData)} />
                <Tab
                  label="VEGETABLE"
                  value="2"
                  onClick={() => filterResult("vegetable")}
                />
                <Tab
                  label="FRUIT"
                  value="3"
                  //onClick={() => filterResult("fruit")}
                />
                <Tab
                  label="HERB"
                  value="4"
                  //onClick={() => filterResult("herb")}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="plantContainer">
                {data.map((values) => {
                  return (
                    <PlantCard
                      plantImage={values.image}
                      plantName={values.id}
                      plantRoundImage={values.roundimage}
                      plantType={values.type}
                      plantHarvest={values.harvest}
                      plantJanImage={values.jan}
                      plantFebImage={values.feb}
                      plantMarImage={values.mar}
                      plantAprImage={values.apr}
                      plantMayImage={values.may}
                      plantJunImage={values.jun}
                      plantJulImage={values.jul}
                      plantAugImage={values.aug}
                      plantSepImage={values.sep}
                      plantOctImage={values.oct}
                      plantNovImage={values.nov}
                      plantDecImage={values.dec}
                      plantRecc={values.plantingRecommendation}
                      plantInfo1={values.generalInfo1}
                      plantInfo2={values.generalInfo2}
                      plantInfo3={values.generalInfo3}
                      plantInfo4={values.generalInfo4}
                      addToPlanner={addToPlanner}
                    />
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="plantContainer">
                {data.map((values) => {
                  return (
                    <PlantCard
                      plantImage={values.image}
                      plantName={values.id}
                      addToPlanner={addToPlanner}
                    />
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="plantContainer"></div>
            </TabPanel>
            <TabPanel value="4">
              <div className="plantContainer"></div>
            </TabPanel>
          </TabContext>
          <div className="layout-right">
            <Link to="/planner" className="addButton">
              <Button variant="contained" color="secondary">
                GO TO PLANTER
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

// Export from module
export default PlantSelection;
