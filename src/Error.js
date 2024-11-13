import React from "react";

function Error(params) {
  return (
    <div
      style={{
        backgroundColor: "#FFD700", // Golden background color
        color: "#FFF", // White text color
        padding: "20px",
        textAlign: "center",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Error</h1>
    </div>
  );
}

export default Error;
