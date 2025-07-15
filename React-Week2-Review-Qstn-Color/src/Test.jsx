import React, { useState } from "react";

function Test() {
  const [color3,SetColor3] = useState("")
  const [input, SetInput] = useState("");
  const [color, SetColor] = useState("");

  const div_style = {
    width: "30px",
    height: "30px",
    marginTop: "10px",
    background: color3,
  };

  const handleInput = (e) => {
    SetInput(e.target.value);
  };

  const handleSubmit = () => {
    SetColor3(color);
    SetColor(input)
    console.log(input)
  };

  return (
    <>
      <input type="text" onChange={handleInput} value={input}></input>
      <button onClick={handleSubmit}>Submit</button>
      <div style={div_style}></div>
    </>
  );
}

export default Test;
