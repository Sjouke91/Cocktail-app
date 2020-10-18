import React, { useState } from "react";
import "./App.scss";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import Cocktails from "./components/pages/Cocktails";
import Categories from "./components/pages/Categories";
import DetailsName from "./components/pages/DetailsName";

function App() {
  const [Search, setSearch] = useState("");

  function searchEmpty() {
    setSearch("");
    return <Link to="/cocktail/:nameDrink" />;
  }

  return (
    <div className="App">
      <nav className="Navbar">
        <ul>
          <li>
            <NavLink className="navlink" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
        <div className="searchbar">
          <input
            placeholder="Your favorite cocktail"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={Search}
          ></input>
          <Link onClick={searchEmpty} to={`/cocktail/${Search}`}>
            <button onClick={searchEmpty}>Search</button>
          </Link>
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
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
