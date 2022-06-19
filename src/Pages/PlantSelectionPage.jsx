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
import { Button, Tab, Box, Hidden, TextField } from "@mui/material";
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

  // Tab selection set/state
  const [value, setValue] = useState("1");
  // State Variable
  const [searchTerm, setSearchTerm] = useState("");

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

  const addToPlanner = async (plant) => {
    try {
      console.log(plant);

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
              <TabList>
                <Tab
                  label="ALL PLANTS"
                  value="1"
                  onClick={() => setData(plantData)}
                />
                <div className="layout-right">
                  <TextField
                    // SEARCH BAR
                    className="searchBar"
                    id="searchInput"
                    type="text"
                    placeholder="Search..."
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}
                  />
                </div>
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="plantContainer">
                {
                  // Searchbar method
                  plantData
                    .filter((val) => {
                      // Show all plants if search field empty
                      if (searchTerm === "") {
                        return val;
                      }
                      // Else-if will return any matching data searched
                      else if (
                        val.id.toLowerCase().includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((data) => {
                      return (
                        <PlantCard
                          plantImage={data.image}
                          plantName={data.id}
                          addToPlanner={addToPlanner}
                        />
                      );
                    })
                }
              </div>
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
