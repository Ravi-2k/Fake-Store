import React from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function AppSkeleton({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default AppSkeleton;
