import React, { useState } from "react";

function Encryption() {
  const [text, setText] = useState("");
  const [key, setKey] = useState(0);
  const [result, setResult] = useState("");

  // Handle input changes for text and key
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyChange = (e) => {
    setKey(parseInt(e.target.value)); // Convert to integer for Caesar Cipher
  };

  // Caesar Cipher
  const handleCaesarCipher = () => {
    const shift = key % 26;
    const caesarResult = text
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
    setResult(caesarResult);
  };

  // Vigenère Cipher
  const handleVigenereCipher = () => {
    const vigenereKey = key.toString();
    const vigenereResult = text
      .split("")
      .map((char, index) => {
        if (/[a-z]/i.test(char)) {
          const base = char.charCodeAt(0) >= 97 ? 97 : 65;
          const shift = parseInt(vigenereKey[index % vigenereKey.length]) % 26;
          return String.fromCharCode(
            ((char.charCodeAt(0) - base + shift) % 26) + base
          );
        }
        return char;
      })
      .join("");
    setResult(vigenereResult);
  };

  return (
    <div
      style={{
        backgroundColor: "#6B4F1F", // Brown background color
        color: "#FFF", // White text color
        padding: "20px",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h2 style={{ color: "#D2B48C" }}>Encryption</h2>{" "}
      {/* Light brown color for heading */}
      <p>Enter text to Encrypt:</p>
      <textarea
        value={text}
        onChange={handleTextChange}
        name="decryptionText"
        aria-label="Decryption Text"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #A0522D", // Medium brown border color
          backgroundColor: "#F4A460", // Sandy brown background for text area
          color: "#6B4F1F",
          marginBottom: "10px",
        }}
      />
      <form>
        <label>Enter Key: </label>
        <input
          type="number"
          name="key"
          value={key}
          onChange={handleKeyChange}
          min="0"
          style={{
            padding: "5px",
            borderRadius: "4px",
            border: "1px solid #A0522D",
            marginLeft: "10px",
          }}
        />
      </form>
      <button
        onClick={handleCaesarCipher}
        style={{
          backgroundColor: "#A0522D", // Medium brown color for button
          color: "#FFF",
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
        onClick={handleVigenereCipher}
        style={{
          backgroundColor: "#A0522D", // Medium brown color for button
          color: "#FFF",
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
          border: "1px solid #A0522D",
          backgroundColor: "#F4A460", // Sandy brown background for result text area
          color: "#6B4F1F",
        }}
      />
    </div>
  );
}

export default Encryption;
