import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Cards = ({currentTableData}) => {

  return currentTableData.length > 0 ? (
    <div>
      {currentTableData.map((recipe) => (
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
