import React, { useState } from "react";

export default function Hello() {
  const [show, setShow] = useState();
  const [colour, setColour] = useState("black");
  function changeColourToRed() {
    setColour("red");
  }
  function changeColourToBlue() {
    setColour("blue");
  }
  return (
    <div>
      <input
        type="text"
        style={{ color: colour }}
        onChange={(e) => {
          setShow(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <h1 style={{ color: colour }}>{show} </h1> <br /> <br />
      <button onClick={changeColourToRed}>
        {" "}
        Click me to change to red{" "}
      </button>{" "}
      <br /> <br />
      <button onClick={changeColourToBlue}> Click me to change to blue </button>
    </div>
  );
}
