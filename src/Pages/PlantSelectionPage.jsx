/* START OF IMPORTS */

// API Imports
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// Plant Data File Import
import plantData from "../Data/PlantInfo.json";
// Firebase/Firestore Imports
import { auth, db } from "../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
// MUI Library & Component Imports
import { Button, Tab, Box, TextField } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
// Infile CSS & Component Imports
import "./PlantSelection.css";
import "../Components/PageLayout.css";
import PlantCard from "../Components/PlantCard";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
// Toastify Alert Imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* END OF IMPORTS */

// ***********************************************************

/* START OF PlantSelection() PAGE */
// Contains plants that users can select for their planner along with category filter tabs
function PlantSelection() {
  // Set initial plant data variable
  const [setData] = useState(plantData);
  // Tab selection variable
  const [value] = useState("1");
  // Search bar variable
  const [searchTerm, setSearchTerm] = useState("");
  // Page navigation variable
  const navigate = useNavigate();
  // Get, Add, & Remove data variables/arrays
  let [userPlants, setUserPlants] = useState([]);
  // Variable to store matching userPlant into (addToPlanner & removeFromPlanner functions)
  let newPlant = "";
  // Get & store user ID variable
  const uid = GetUserUid();

  /* START OF BACK-END FUNCTIONS */

  // GetUserUid() function to get current user id and return in to uid variable
  function GetUserUid() {
    const [uid, setUid] = useState("");
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // If user is logged in, set user id to uid
          setUid(user.uid);
        } else {
          // Else if user is not logged in, redirect to /signin page so that selection can be stored in user account
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

  // GetData function called when add or remove functions called
  // Same functionality as above function but calling this allows add/remove checks on up-to-date planners instead of just the initial data load
  const GetData = async () => {
    const q = query(collection(db, "users"), where("userID", "==", `${uid}`));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    // getting plant data from matching user
    for (let i = 0; i < data.length; i++) {
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
  }; // End of GetData

  // addToPlanner function to add selected plant to user's planner collection
  const addToPlanner = async (plant) => {
    GetData(); // Calling to get up-to-date planner
    // For/if loop to determine if selected plant is already in the user's planner
    for (let i = 0; i < userPlants.length; i++) {
      if (userPlants[i].name === plant) {
        // If match is found, set newPlant to match plant and break loop
        newPlant = plant;
        break;
      }
    }
    // If plant name is already in the user planner, it'll trigger a warning
    if (newPlant === plant) {
      try {
        // Warning alert
        toast.warning(plant + " is already in your planter", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
        // Waiting to catch errors
      } catch (error) {
        console.error(error);
      }
    }
    // Else, if plant name is not in the user planner, it'll add it to firestore doc
    else {
      try {
        // Adding plant to user doc
        await setDoc(doc(db, "users", uid, "planner", plant), {
          name: plant,
        }).then(() => {
          onSnapshot(doc(db, "users", uid, "planner", plant), (doc) => {});
          // Confirmation alert
          toast.success(plant + " added to your planter!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });
        });
        // Waiting to catch errors
      } catch (error) {
        console.error(error);
      }
    }
  }; // End of addToPlanner

  // removeFromPlanner function to remove selected plant from user's planner collection
  const removeFromPlanner = async (plant) => {
    GetData(); // Calling to get up-to-date planner
    // For/if loop to determine if selected plant is already in the user's planner
    for (let i = 0; i < userPlants.length; i++) {
      if (userPlants[i].name === plant) {
        // If match is found, set newPlant to match plant and break loop
        newPlant = plant;
      }
    }
    console.log(plant);
    // If plant name is in the user planner, it'll be removed from firestore doc
    if (newPlant === plant) {
      try {
        // Removing plant from user doc
        deleteDoc(doc(db, "users", uid, "planner", plant));
        // Confirmation alert
        toast.error(plant + " removed from planter", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      } catch (error) {
        // Waiting to catch errors
        console.error(error);
      }
    }
    // Else, if plant name is not in the user planner, it'll trigger a warning
    else {
      try {
        // Warning alert
        toast.warning(plant + " isn't in your planter, so cannot be removed", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      } catch (error) {
        // Waiting to catch errors
        console.error(error);
      }
    }
  }; // End of removeFromPlanner

  /* END OF BACK-END FUNCTIONS */

  // ***********************************************************

  /* START OF FRONT-END OUTPUT */
  return (
    <div className="layout-container">
      <Navbar />
      <ToastContainer
        position="top-right"
        theme="colored"
        hideProgressBar={false}
        newestOnTop={false}
        limit={5}
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
/* END OF FRONT-END OUTPUT */

// Export from module
export default PlantSelection;

/* END OF PlantSelection() PAGE */
