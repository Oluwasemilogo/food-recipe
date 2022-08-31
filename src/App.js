import "./App.css";
import "./key.js";
import Axios from "axios";
import { useState } from "react";
import RecipeCard from "./RecipeCard";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [label, setLabel] = useState("vegan");

  const YOUR_APP_ID = "663295c8";
  const YOUR_APP_KEY = "0ba8812eaac7268cb70f0f88e871ea06";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${label}`;

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
        <select className="app_labels">
          <option onClick={() => setLabel("vegan")}>Vegan</option>
          <option onClick={() => setLabel("vegetarian")}>Vegetarian</option>
          <option onClick={() => setLabel("paleo")}>Paleo</option>
          <option onClick={() => setLabel("diary-free")}>Diary-Free</option>
          <option onClick={() => setLabel("gluten-free")}>Gluten-Free</option>
          <option onClick={() => setLabel("wheat-free")}>Wheat-Free</option>
          <option onClick={() => setLabel("low-sugar")}>Low-Sugar</option>
          <option onClick={() => setLabel("egg-free")}>Egg-Free</option>
          <option onClick={() => setLabel("peanut-free")}>Peanut-Free</option>
          <option onClick={() => setLabel("tree-nut-free")}>
            Tree-nut-free
          </option>
          <option onClick={() => setLabel("soy-free")}>soy-Free</option>
          <option onClick={() => setLabel("fish-Free")}>Fish-free</option>
          <option onClick={() => setLabel("shellfish-free")}>
            Shellfish-Free
          </option>
        </select>
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
