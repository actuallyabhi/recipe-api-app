import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";

function App() {
  const APP_ID = "e057bddc";
  const APP_KEY = "0cfb87736fccf7ef15b0cab4beae9ea1";

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchRecipes();
  }, [query]);

  const fetchRecipes = () => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then(res => res.json())
      .then(res => {
        setRecipes(res.hits);
      });
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="app">
      <form onSubmit={getSearch}>
        <div className="search-area">
          <input
            type="text"
            name="recipe-search"
            placeholder="search recipes here..."
            value={search}
            onChange={updateSearch}
          />

          <button className="search-icon" type="submit">
            Search
          </button>
        </div>
      </form>

      <div className="recipes">
        {recipes.map(res => (
          <Recipe
            key={res.recipe.label}
            title={res.recipe.label}
            calories={res.recipe.calories}
            img={res.recipe.image}
          />
        ))}

        {recipes !== "" ? console.log("working..") : ""}
      </div>
    </div>
  );
}

export default App;
