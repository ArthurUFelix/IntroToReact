import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Panda",
      animal: "Dog",
      breed: "Shietzu"
    }),
    React.createElement(Pet, { name: "Ursa", animal: "Dog", breed: "Shietzu" }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
