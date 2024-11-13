import React, { useState } from "react";

function Decryption() {
  const [text, setText] = useState("");
  const [key, setKey] = useState(0);
  const [result, setResult] = useState("");

  // Caesar Cipher Decryption
  const handleDecryptCaesar = () => {
    const shift = (26 - (key % 26)) % 26;
    const caesarDecrypted = text
      .split("")
      .map((char) => {
        if (/[a-z]/i.test(char)) {
          const base = char.charCodeAt(0) >= 97 ? 97 : 65;
          return String.fromCharCode(
            ((char.charCodeAt(0) - base + shift) % 26) + base
          );
        }
        return char;
      })
      .join("");
    setResult(caesarDecrypted);
  };

  // Vigenère Cipher Decryption
  const handleDecryptVigenere = () => {
    const vigenereKey = key.toString();
    const vigenereDecrypted = text
      .split("")
      .map((char, index) => {
        if (/[a-z]/i.test(char)) {
          const base = char.charCodeAt(0) >= 97 ? 97 : 65;
          const shift =
            (26 - (parseInt(vigenereKey[index % vigenereKey.length]) % 26)) %
            26;
          return String.fromCharCode(
            ((char.charCodeAt(0) - base + shift) % 26) + base
          );
        }
        return char;
      })
      .join("");
    setResult(vigenereDecrypted);
  };

  return (
    <div
      style={{
        backgroundColor: "#556B2F", // Olive green background color for the container
        color: "#FFFFFF", // White text color
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "500px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ color: "#9ACD32" }}>Decryption</h2>{" "}
      {/* Lighter olive green for headings */}
      <p>Enter text to decrypt:</p>
      <textarea
        name="decryptionText"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Decryption Text"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #6B8E23", // Darker olive border color
          backgroundColor: "#F0E68C", // Khaki background color
          color: "#556B2F",
          marginBottom: "10px",
        }}
      />
      <form>
        <label>Enter Key: </label>
        <input
          type="number"
          name="key"
          value={key}
          onChange={(e) => setKey(Number(e.target.value))}
          min="0"
          style={{
            padding: "5px",
            borderRadius: "4px",
            border: "1px solid #6B8E23",
            marginLeft: "10px",
          }}
        />
      </form>
      <button
        onClick={handleDecryptCaesar}
        style={{
          backgroundColor: "#6B8E23", // Dark olive green button color
          color: "#FFFFFF",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          marginRight: "10px",
          marginTop: "10px",
        }}
      >
        Caesar Cipher
      </button>
      <button
        onClick={handleDecryptVigenere}
        style={{
          backgroundColor: "#6B8E23", // Dark olive green button color
          color: "#FFFFFF",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Vigenère Cipher
      </button>
      <p style={{ marginTop: "20px" }}>The result is:</p>
      <textarea
        value={result}
        readOnly
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #6B8E23",
          backgroundColor: "#F0E68C", // Khaki background color
          color: "#556B2F",
        }}
      />
    </div>
  );
}

export default Decryption;
