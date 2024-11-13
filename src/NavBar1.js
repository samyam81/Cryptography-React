import React from "react";
import { Link } from "react-router-dom";

function NavBar1() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#FFC0CB", // Light pink background color
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <Link to="/encryption" style={{ textDecoration: "none" }}>
        <button
          style={{
            backgroundColor: "#FF69B4", // Hot pink button color
            color: "#FFFFFF",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Encryption
        </button>
      </Link>
      <Link to="/decryption" style={{ textDecoration: "none" }}>
        <button
          style={{
            backgroundColor: "#FF69B4", // Hot pink button color
            color: "#FFFFFF",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Decryption
        </button>
      </Link>
    </nav>
  );
}

export default NavBar1;
