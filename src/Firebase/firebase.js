/* START OF IMPORTS */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/* END OF IMPORTS */

// ***********************************************************

/* START OF firebase FILE */

//  Planter's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsacB248RCb6k_dcjieYBsV3jqgDF0TT4",
  authDomain: "new-planter-app.firebaseapp.com",
  projectId: "new-planter-app",
  storageBucket: "new-planter-app.appspot.com",
  messagingSenderId: "828800002834",
  appId: "1:828800002834:web:56ab4f7c02e0373adb61cb",
  measurementId: "G-PC85PE92W0",
};

/* END OF firebase FILE */

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
