import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { snakeCase } from "snake-case";

export default function Cocktails() {
  const [cocktailList, setcocktailList] = useState({
    status: "idle",
    data: [],
  });
  const category = useParams();
  const param = category.categoryName;
  const newParam = snakeCase(param);

  console.log(`param ${param}`);

  useEffect(() => {
    const getCocktails = async () => {
      setcocktailList({ status: "Loading", data: [] });
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${newParam}`
      );
      console.log(response);
      setcocktailList({ status: "done", data: response.data.drinks });
    };
    getCocktails();
  }, []);

  return (
    <div>
      {cocktailList.data.map((cocktail) => {
        return (
          <div>
            <p>{cocktail.strDrink}</p> <img src={cocktail.strDrinkThumb}></img>
          </div>
        );
      })}
    </div>
  );
}
