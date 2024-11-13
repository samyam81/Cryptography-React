import React from "react";

function Contact() {
  return (
    <div
      style={{
        backgroundColor: "#4B0082", // Purple background color
        padding: "20px",
        borderRadius: "8px",
        color: "#FFFFFF", // White text for readability
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ color: "#800020", fontSize: "24px", fontWeight: "bold" }}>
        Contact Us
      </h2>
      <p style={{ color: "#D8BFD8", fontSize: "16px" }}>
        If you have any questions or feedback about the Cryptographic
        Algorithym, feel free to reach out using the form below.
      </p>
      <form>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #D8BFD8",
              borderRadius: "4px",
              backgroundColor: "#FFFFFF",
              color: "#4B0082",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #D8BFD8",
              borderRadius: "4px",
              backgroundColor: "#FFFFFF",
              color: "#4B0082",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="message"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #D8BFD8",
              borderRadius: "4px",
              backgroundColor: "#FFFFFF",
              color: "#4B0082",
              resize: "vertical",
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#800020", // Red wine button color
            color: "#FFFFFF",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
