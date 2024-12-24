import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [useCode, setUseCode] = useState([]);

  const googleProvider = new GoogleAuthProvider();

  const SignUpEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignInEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const Update_information = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(true);
      const user = { email: currentUser?.email };
      if (currentUser?.email) {
        axios
          .post(`${import.meta.env.VITE_server}/jwt`, user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            setLoading(true);
          });
      } 
      else {
        axios
          .post(`${import.meta.env.VITE_server}/logout`, {}, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            setLoading(true);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const AuthInfo = {
    user,
    setUser,
    SignInEmailAndPassword,
    SignUpEmailAndPassword,
    handleSignOut,
    SignInGoogle,
    Update_information,
    loading,
    loginEmail,
    setLoginEmail,
    useCode,
    setUseCode,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
