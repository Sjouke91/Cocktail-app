import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/randomizer/:idDrink">
        <button>Surprise me!</button>
      </Link>
    </div>
  );
}
