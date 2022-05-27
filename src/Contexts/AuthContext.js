// API Imports
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

// AuthContext files handles user authentication throughout the app & firebase

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

  // Signs out user
  const logout = () => {
    return signOut(auth);
  };

  /*useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });*/

  // Sets user authenitcation as true
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  });

  return (
    // Export values
    <UserContext.Provider value={{ createUser, user, signIn, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Makes context available throughout app
export const UserAuth = () => {
  return useContext(UserContext);
};
