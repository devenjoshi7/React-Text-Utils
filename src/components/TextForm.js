import React, { useState } from "react";

export default function TextForm({ heading, mode, showAlert }) {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    showAlert("Converted to Uppercase", "success")
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
    showAlert("Converted to Lowercase", "success")
  };

  const handleClearText = () => {
    setText("");
    showAlert("Text Cleared", "success")
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className="container mb-3">
        <h2 for="myBox" className="form-label" style={{ color: mode === 'light' ? 'black' : 'white' }}>
          {heading}
        </h2>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="10"
          onChange={handleTextChange}
          style={{ backgroundColor: mode === 'dark' ? '#191a2d' : 'white', color: mode === 'dark' ? 'white' : 'black' }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpperCase}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLowerCase}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleClearText}>
        Clear Text
      </button>
      <div className="container my-2" style={{ color: mode === 'light' ? 'black' : 'white' }}>
        <h4>Your Text Summary: </h4>
        <p>
          {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes needed to read the words</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
