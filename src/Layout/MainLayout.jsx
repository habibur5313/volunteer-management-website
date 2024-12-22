import React from "react";
import Navbar from "../SharedItems/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../SharedItems/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-380px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
