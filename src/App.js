import React from "react";
import "./styles.css";
import ThemeToggle from "./ThemeToggle";
import pizzaImage1 from "./assets/images/pizza1.jpg";
import pizzaImage2 from "./assets/images/pizza2.jpg";

export default function App() {
  return (
    <div className="container">
      <header>
        <ThemeToggle />
      </header>
      <h1>Ingredients</h1>
      <ol>
        <li>
          <img src={pizzaImage1} alt="pizza1" />
          <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </li>
        <li>
          <img src={pizzaImage2} alt="pizza2" />
          <p>2. Ut placerat neque odio</p>
        </li>
        <li>
          <img src={pizzaImage1} alt="pizza3" />
          <p>3. Cras quis aliquam ipsum</p>
        </li>
        <li>
          <img src={pizzaImage2} alt="pizza4" />
          <p>4. Cras risus enim, tincidunt eu diam placerat</p>
        </li>
      </ol>
    </div>
  );
}
