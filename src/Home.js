import React, { useState } from "react";
import NavBar1 from "./NavBar1";

function Home() {
  const [imageLoaded, setImageLoaded] = useState(true); // Track image load state

  const handleImageError = () => {
    setImageLoaded(false); // Set state to false if image fails to load
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#4B0082", // Purple background for the home container
          minHeight: "100vh",
          padding: "20px",
          color: "#FFFFFF", // White text for readability
        }}
      >
        <NavBar1 />
      </div>
      <img
        src="https://caltechsites-prod.s3.amazonaws.com/scienceexchange/images/CSE-Cryptography-Header-WEB.2e16d0ba.fill-933x525-c100.jpg"
        alt="Cryptography Header"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          display: "block",
          margin: "20px 0",
        }}
        onError={handleImageError} // Handle image error
      />
      {!imageLoaded && (
        <p style={{ color: "#FFFFFF" }}>
          Image failed to load. Please try again later.
        </p>
      )}
    </>
  );
}

export default Home;
