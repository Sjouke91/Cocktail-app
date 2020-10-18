import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Categories() {
  const [Categorylist, setCategorylist] = useState({
    status: "idle",
    data: [],
  });

  useEffect(() => {
    const getCategories = async () => {
      setCategorylist({ status: "loading", data: [] });
      try {
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        );
        if (response.data === "false") {
          setCategorylist({ status: "error unclear", data: [] });
        } else {
          setCategorylist({ status: "done", data: response.data.drinks });
        }
      } catch (error) {
        console.log(error);
        setCategorylist({ status: "error", data: [], message: error.message });
      }
    };
    getCategories();
  }, []);

  return (
    <div>
      {Categorylist.status === "error" ? (
        <h3>You f*cked it up because we have a: {Categorylist.message}</h3>
      ) : (
        ""
      )}
      {Categorylist.data.map((category, index) => {
        return (
          <div key={index}>
            <Link to={`/categories/${category.strCategory}`}>
              <p>{category.strCategory}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
