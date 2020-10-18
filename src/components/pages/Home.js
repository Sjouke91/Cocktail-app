import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Quote from "../Quote";

export default function Home() {
  return (
    <div className="background">
      <div id="one" className="colorbar"></div>
      <div id="two" className="colorbar"></div>

      <div id="three" className="colorbar"></div>
      <div id="four" className="colorbar"></div>
      <div id="five" className="colorbar"></div>
      <Link className="button" to="/randomizer/:idDrink">
        <button className="button">Surprise me!</button>
      </Link>

      <h1 className="titles">Time for a cocktail..</h1>
      <div className="quotes">
        <Quote />
      </div>
    </div>
  );
}
