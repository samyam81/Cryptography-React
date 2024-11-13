import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#8B4513", // SaddleBrown background color for the nav bar
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <button
          style={{
            backgroundColor: "#A0522D", // Sienna color for buttons
            color: "#FFFFFF",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Home
        </button>
      </Link>
      <Link to="/how" style={{ textDecoration: "none" }}>
        <button
          style={{
            backgroundColor: "#A0522D", // Sienna color for buttons
            color: "#FFFFFF",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          How
        </button>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <button
          style={{
            backgroundColor: "#A0522D", // Sienna color for buttons
            color: "#FFFFFF",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Contact
        </button>
      </Link>
    </nav>
  );
}

export default NavBar;
