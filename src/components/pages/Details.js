import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Details() {
  const [Cocktail, setCocktail] = useState({ status: "idle", data: [] });
  const params = useParams();
  const cocktailID = params.idDrink;

  console.log(cocktailID);

  useEffect(() => {
    const getCocktail = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`
      );
      console.log("This is response", response);
      setCocktail({ status: "done", data: response.data.drinks });
    };
    getCocktail();
  }, []);

  return (
    <div>
      {Cocktail.data.map((cocktail) => {
        return (
          <div>
            <h1>{cocktail.strDrink}</h1>
            <p>type: {cocktail.strCategory}</p>
            <p>instructions: {cocktail.strInstructions}</p>
            <p>ingredient 2:{cocktail.strIngredient2}</p>
            <p>ingredient 1:{cocktail.strIngredient1}</p>
            <p>Glass: {cocktail.strGlass}</p>
            <img src={cocktail.strThumb} alt={cocktail.strDrink} />
          </div>
        );
      })}
    </div>
  );
}
