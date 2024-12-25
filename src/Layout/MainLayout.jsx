import React, { useEffect, useState } from "react";
import Navbar from "../SharedItems/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../SharedItems/Footer";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div>
       <div
        className={
          darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
        }
      >
      <div className="container mx-auto">
        <Navbar toggleDarkMode={toggleDarkMode}></Navbar>
        <div className="min-h-[calc(100vh-380px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
    </div>
  );
};

export default MainLayout;
