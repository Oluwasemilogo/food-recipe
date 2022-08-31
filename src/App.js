import "./App.css";
import "./key.js";
import Axios from "axios";
import { useState } from "react";
import RecipeCard from "./RecipeCard";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const YOUR_APP_ID = "663295c8";
  const YOUR_APP_KEY = "0ba8812eaac7268cb70f0f88e871ea06";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getRecipes() {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }
  const onsubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipes}>Food Recipe Hub</h1>
      <form className="app_searchForm" onSubmit={onsubmit}>
        <input
          type="text"
          className="app_input"
          placeholder="Enter Food Ingredient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="Search" className="app_search" />
      </form>
      <div className="app_recipes">
        {recipes.map((recipe) => {
          return <RecipeCard recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
