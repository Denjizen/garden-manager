import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Garden from "./pages/Garden";
import CropInfo from "./pages/CropInfo";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  let pageToRender;
  if (currentPage === "dashboard") pageToRender = <Dashboard />;
  else if (currentPage === "garden") pageToRender = <Garden />;
  else if (currentPage === "cropinfo") pageToRender = <CropInfo />;

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
        {pageToRender}
      </main>
    </>
  );
}
