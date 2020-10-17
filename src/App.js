import React from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import Cocktails from "./components/pages/Cocktails";
import Categories from "./components/pages/Categories";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
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
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
