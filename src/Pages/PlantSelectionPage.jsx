// API Imports
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  deleteDoc,
  updateDoc,
  deleteField,
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
// Toastify Alerts
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const navigate = useNavigate();

  // Get current user id and return in to const
  const uid = GetUserUid();
  function GetUserUid() {
    const [uid, setUid] = useState("");
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUid(user.uid);
        }
        else{
          // Redirects to /signin page so that selection can be stored in user account
          navigate("/signin");
        }
      });
    }, []);
    return uid;
  }

  // Add selected plant to user's planner collection
  const addToPlanner = async (plant) => {
    try {
      await setDoc(doc(db, "users", uid, "planner", plant), {
        name: plant,
      }).then(() => {
        onSnapshot(doc(db, "users", uid, "planner", plant), (doc) => {
          toast.success("Added to planner!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });
        });
      });
      // Waiting to catch errors
    } catch (error) {
      console.error(error);
    }
  };
 
  // Remove selected plant from user's planner collection **IN PROGRESS
  function removeFromPlanner(plantName) {
    if(plantName ){

    }
    try {
       deleteDoc(doc(db, "users", uid, "planner", plantName), {
      })
      console.log("record removed")
    }
      catch (error) {
      // Waiting to catch errors
      console.error(error);
    }
  };

  // Output
  return (
    <div className="layout-container">
      <Navbar />
      <ToastContainer
        position="top-right"
        theme="colored"
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
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
                          removeFromPlanner={removeFromPlanner}
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
