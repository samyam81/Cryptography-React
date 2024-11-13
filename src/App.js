import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import How from "./How";
import Error from "./Error";
import NavBar from "./NavBar";
import Encryption from "./Encryption";
import Decryption from "./Decryption";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded ? (
        <div
          style={{
            backgroundColor: "#4169E1", // Royal Blue background
            color: "#FFF", // White text color
            fontFamily: "Arial, sans-serif",
            minHeight: "100vh",
          }}
        >
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/how" element={<How />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/encryption" element={<Encryption />} />
              <Route path="/decryption" element={<Decryption />} />
            </Routes>
          </Router>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
}

export default App;
