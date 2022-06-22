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
  apiKey: "AIzaSyDBKUmMSdcA717f0_7UnU2X0zSHl2lYDko",
  authDomain: "planter-web-app.firebaseapp.com",
  databaseURL: "https://planter-web-app-default-rtdb.firebaseio.com",
  projectId: "planter-web-app",
  storageBucket: "planter-web-app.appspot.com",
  messagingSenderId: "237982646424",
  appId: "1:237982646424:web:ee266909191e58c8ab90ed",
};

/* END OF firebase FILE */

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
