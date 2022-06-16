// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration (PLANTER WEB APP ORIGINAL)
/*const firebaseConfig = {
  apiKey: "AIzaSyDBKUmMSdcA717f0_7UnU2X0zSHl2lYDko",
  authDomain: "planter-web-app.firebaseapp.com",
  projectId: "planter-web-app",
  storageBucket: "planter-web-app.appspot.com",
  messagingSenderId: "237982646424",
  appId: "1:237982646424:web:ee266909191e58c8ab90ed",
};*/

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsacB248RCb6k_dcjieYBsV3jqgDF0TT4",
  authDomain: "new-planter-app.firebaseapp.com",
  projectId: "new-planter-app",
  storageBucket: "new-planter-app.appspot.com",
  messagingSenderId: "828800002834",
  appId: "1:828800002834:web:56ab4f7c02e0373adb61cb",
  measurementId: "G-PC85PE92W0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
