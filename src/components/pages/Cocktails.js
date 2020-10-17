import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { snakeCase } from "snake-case";
import { Link } from "react-router-dom";

export default function Cocktails() {
  const [cocktailList, setcocktailList] = useState({
    status: "idle",
    data: [],
  });
  const category = useParams();
  const param = category.categoryName;
  const newParam = snakeCase(param);

  console.log("this is param", category);
  useEffect(
    () => {
      const getCocktails = async () => {
        setcocktailList({ status: "Loading", data: [] });
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${newParam}`
        );
        setcocktailList({ status: "done", data: response.data.drinks });
      };
      getCocktails();
    }, // eslint-disable-next-line
    []
  );

  console.log(cocktailList.data);

  return (
    <div>
      {cocktailList.data.map((cocktail) => {
        return (
          <div key={cocktail.idDrink}>
            <Link to={`/list/${cocktail.idDrink}`}>
              <p>{cocktail.strDrink}</p>
              <p>{cocktail.idDrink}</p>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
