import React from "react";
import Card from "./Card";
import styled from "styled-components";

const NoRecipe = styled.h1`
    font-size: 2.3rem;
`;
const Cards = ({currentRecipes}) => {
  return currentRecipes.length > 0 ? (
    <div>
      {currentRecipes.map((recipe) => (
        <div  key={recipe.id}>
          <Card recipe={recipe} />
        </div>
      ))}
    </div>
  ) : (
      <NoRecipe>No Recipe To Show, please WAIT, reload or delete filters</NoRecipe>
  );
};

export default Cards;
