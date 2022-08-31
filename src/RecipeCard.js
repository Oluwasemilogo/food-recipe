import React from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  return (
    <div className="recipecard">
      <img
        src={recipe["recipe"]["image"]}
        alt="RecipeIMG"
        className="recipecard_img"
      />
      <p className="recipecard_name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}

export default RecipeCard;
