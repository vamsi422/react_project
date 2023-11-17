import React from "react";
let colors = [
  "red",
  "blue",
  "green",
  "brown",
  "yellow",
  "pink",
  "black",
  "white",
];

let elements = [];
colors.forEach((color) =>
  elements.push(
    <button
      type="button"
      key={color}
      className="bg-cyan-400 bg-opacity-50 m-3 p-2 rounded hover:underline"
    >
      {color}
    </button>
  )
);
function changeColor(e) {
  let selectedColor = e.target.innerHTML;
  document.body.style.backgroundColor = selectedColor;
}
const Header = () => {
  return (
    <div
      onClick={changeColor}
      className=" flex justify-between items-center max-w-6xl mx-auto p-3"
    >
      {elements}
    </div>
  );
};

export default Header;
