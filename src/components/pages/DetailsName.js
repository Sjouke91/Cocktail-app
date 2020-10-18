import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function DetailsName() {
  const [SearchResult, setSearchResult] = useState({
    status: "idle",
    data: [],
  });
  const category = useParams();
  const param = category.nameDrink;

  console.log("thisisparam", param);

  useEffect(
    () => {
      const getData = async () => {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${param}`
        );
        console.log("this is response", response.data);
        setSearchResult({ status: "done", data: response.data.drinks });
      };
      getData();
    }, // eslint-disable-next-line
    []
  );

  console.log("state", SearchResult);
  return (
    <div className="Background">
      {SearchResult.status === "loading" ? <p>Wait for it..</p> : ""}
      {SearchResult.data.map((cocktail) => {
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
