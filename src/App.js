import React, { useState } from "react";
import "./App.scss";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import Cocktails from "./components/pages/Cocktails";
import Categories from "./components/pages/Categories";
import DetailsName from "./components/pages/DetailsName";
import Ingredient from "./components/pages/Ingredient";
import Randomizer from "./components/pages/Randomizer";

function App() {
  const [Search, setSearch] = useState("");
  const [SearchIngredient, setSearchIngredient] = useState("");

  function searchEmpty() {
    setSearch("");
    setSearchIngredient("");
    return <Link to="/cocktail/:nameDrink" />;
  }

  return (
    <div className="App">
      <nav className="Navbar">
        <ul>
          <li>
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/categories">
              Categories
            </NavLink>
          </li>
        </ul>

        <div className="searchParent">
          <div className="searchbar">
            <input
              placeholder="Your favorite cocktail"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={Search}
            ></input>
            <Link to={`/cocktail/${Search}`}>
              <button onClick={searchEmpty}>Search</button>
            </Link>
          </div>
          <div className="searchbar">
            <input
              placeholder="Your favorite ingredient"
              onChange={(e) => {
                setSearchIngredient(e.target.value);
              }}
              value={SearchIngredient}
            ></input>
            <Link to={`/ingredient/${SearchIngredient}`}>
              <button onClick={searchEmpty}>Search</button>
            </Link>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/categories/:categoryName">
          <Cocktails />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/list/:idDrink">
          <Details />
        </Route>
        <Route path="/cocktail/:nameDrink">
          <DetailsName />
        </Route>
        <Route path="/ingredient/:ingredient">
          <Ingredient />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/randomizer/:idDrink">
          <Randomizer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
