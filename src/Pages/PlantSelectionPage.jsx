// API Imports
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// Firebase/Firestore Import
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
// MUI Library & Component Imports
import { Button, Tab, Box } from "@mui/material";
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
  // Data set/state
  const [plants, setPlants] = useState([]);
  // Firestore database variable
  const plantCollectioRef = collection(db, "plants");
  // Tab selection set/state
  const [value, setValue] = useState("1");

  // Filter data function
  /*const filterResult = (plantTypes) => {
    const result = plantData.filter((currentData) => {
      return currentData.type === plantTypes;
    });
    setData(result);
  };*/

  // Called when page renders
  useEffect(() => {
    const fetchPlants = async () => {
      const data = await getDocs(plantCollectioRef);
      setPlants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchPlants();
  }, []);

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
  let Plant;
  const addToPlanner = async (plant) => {
    try {
      console.log(plant);
      Plant = plant;
      await setDoc(doc(db, "users", uid, "planner", plant), {
        name: plant,
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
                <Tab label="ALL" value="1" />
                <Tab
                  label="VEGETABLE"
                  value="2"
                  //onClick={() => filterResult("vegetable")}
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
                {plants.map((plant) => {
                  return (
                    <div>
                      <PlantCard
                        plantName={plant.name}
                        plantImage={plant.image}
                        addToPlanner={addToPlanner}
                      />
                    </div>
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="plantContainer"></div>
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
