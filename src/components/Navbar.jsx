import React from "react";
import "./Navbar.css";

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">
      <button
        className={currentPage === "dashboard" ? "nav-button active" : "nav-button"}
        onClick={() => setCurrentPage("dashboard")}
      >
        Dashboard
      </button>
      <button
        className={currentPage === "garden" ? "nav-button active" : "nav-button"}
        onClick={() => setCurrentPage("garden")}
      >
        Garden
      </button>
      <button
        className={currentPage === "cropinfo" ? "nav-button active" : "nav-button"}
        onClick={() => setCurrentPage("cropinfo")}
      >
        Crop Info
      </button>
    </nav>
  );
}
