import React from "react";
// import { useSelector } from "react-redux";
import Card from "./Card";

const Cards = ({currentRecipes}) => {
  console.log(currentRecipes,'currentRecipes');

  return currentRecipes.length > 0 ? (
    <div>
      {currentRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Card recipe={recipe} />
        </div>
      ))}
    </div>
  ) : (
    "cargando....."
  );
};

export default Cards;
