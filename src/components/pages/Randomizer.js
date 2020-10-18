import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Details.scss";
import { useHistory } from "react-router-dom";

export default function Details() {
  const [Cocktail, setCocktail] = useState({ status: "idle", data: [] });
  const [Reset, setreset] = useState("");
  const [Remember, setRemember] = useState("");
  const history = useHistory();

  useEffect(
    () => {
      const getCocktail = async () => {
        setCocktail({ status: "loading", data: [] });

        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/random.php`
          );
          if (response === "false") {
            setCocktail({ status: "unclear error", data: [] });
          } else {
            setCocktail({ status: "done", data: response.data.drinks });
            setRemember(response.data.drinks[0].idDrink);
            console.log("This is response", response);
          }
        } catch (error) {
          setCocktail({ status: "error", data: [], message: error.message });
        }
      };
      getCocktail();
    }, // eslint-disable-next-line
    [Reset]
  );
  console.log("This is remember", Remember);

  return (
    <div className="background">
      {Cocktail.status === "loading" ? <h1>Wait for it...</h1> : ""}
      {Cocktail.data.map((cocktail) => {
        return (
          <div key={cocktail.idDrink} className="card">
            <div className="text">
              <h1>{cocktail.strDrink}</h1>
              <p>type: {cocktail.strCategory}</p>
              <p>instructions: {cocktail.strInstructions}</p>
              <p>ingredient 2:{cocktail.strIngredient2}</p>
              <p>ingredient 1:{cocktail.strIngredient1}</p>
              <p>Glass: {cocktail.strGlass}</p>
            </div>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          </div>
        );
      })}
      <button
        onClick={() => {
          setreset(Math.random());
          history.push(Remember);
        }}
      >
        Next!
      </button>
    </div>
  );
}
