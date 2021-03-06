/* START OF IMPORTS */

// API Imports
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";

/* END OF IMPORTS */

// ***********************************************************

/* START OF AuthContext FILE */

// AuthContext files handles user authentication throughout the app & firebase

/* START OF BACK-END FUNCTIONS */

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // Creates user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Signs in user
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Forgot Password
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateUserEmail = (email) => {
    return updateEmail(auth, email);
  };

  // Signs out user
  const logout = () => {
    return signOut(auth);
  };

  // Sets user authenitcation as true
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  });

  return (
    // Export values
    <UserContext.Provider
      value={{
        createUser,
        user,
        signIn,
        logout,
        forgotPassword,
        updateUserEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

/* END OF BACK-END FUNCTIONS */

// Makes context available throughout app
export const UserAuth = () => {
  return useContext(UserContext);
};

/* END OF AuthContext FILE */
