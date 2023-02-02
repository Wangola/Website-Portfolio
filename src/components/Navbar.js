import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { CgMenuRight } from "react-icons/cg";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  // Gets of change
  const location = useLocation();

  // Function that should run if location changes
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <CgMenuRight />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home</Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/experience"> Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
