//import { useState } from "react";
import React from "react";
// declaring all the colors
let colors = [
  "red",
  "blue",
  "green",
  "brown",
  "yellow",
  "pink",
  "black",
  "white",
  "orange",
];
// creating an empty array and later filling it with the button element having color name inside them
let elements = [];
colors.forEach((color) =>
  elements.push(
    <button
      type="button"
      key={color}
      className="bg-cyan-400 m-3 p-2 rounded hover:underline"
    >
      {color}
    </button>
  )
);
function changeColor(e) {
  let selectedColor = e.target.innerHTML;
  document.body.style.backgroundColor = selectedColor;
}
function App() {
  return (
    <div>
      <h3 className="text-center p-2 bg-gray-500">
        select your backgroundColor
      </h3>
      <div
        onClick={changeColor}
        className=" flex justify-between items-center max-w-6xl mx-auto p-3 bg-rose-600 shadow-2xl opacity-90"
      >
        {elements}
      </div>
    </div>
  );
}

export default App;
