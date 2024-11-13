import React from "react";

function How() {
  return (
    <div
      style={{
        backgroundColor: "#4B0082", // Purple background
        padding: "20px",
        borderRadius: "8px",
        color: "#FFFFFF", // White text for readability
      }}
    >
      <h2 style={{ color: "#800020", fontSize: "24px", fontWeight: "bold" }}>
        How to use the website?
      </h2>
      <p style={{ color: "#D8BFD8", fontSize: "16px" }}>
        Welcome! This website is designed with simplicity in mind. Navigate
        through the menu to explore various sections. Each feature is crafted to
        enhance your experience. For any help, feel free to reach out via the
        contact page.
      </p>
      <button
        style={{
          backgroundColor: "#800020", // Red wine button color
          color: "#FFFFFF",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Learn More
      </button>
    </div>
  );
}

export default How;
