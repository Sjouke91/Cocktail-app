import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { snakeCase } from "snake-case";
import { Link } from "react-router-dom";
import "./Cocktails.scss";

export default function Cocktails() {
  const [cocktailList, setcocktailList] = useState({
    status: "idle",
    data: [],
  });
  const category = useParams();
  const param = category.categoryName;
  const newParam = snakeCase(param);

  useEffect(
    () => {
      const getCocktails = async () => {
        setcocktailList({ status: "Loading", data: [] });
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${newParam}`
          );

          if (response === "false") {
            setcocktailList({ status: "error unclear", data: [] });
          } else {
            setcocktailList({ status: "done", data: response.data.drinks });
          }
        } catch (error) {
          setcocktailList({
            status: "error",
            data: [],
            message: error.message,
          });
        }
      };
      getCocktails();
    }, // eslint-disable-next-line
    []
  );
  console.log(cocktailList.data);

  return (
    <div className="Background">
      {cocktailList.status === "loading" ? <p>Wait for it..</p> : ""}
      {cocktailList.data.map((cocktail) => {
        return (
          <div className="Card" key={cocktail.idDrink}>
            <Link to={`/list/${cocktail.idDrink}`}>
              <p className="title">{cocktail.strDrink}</p>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
