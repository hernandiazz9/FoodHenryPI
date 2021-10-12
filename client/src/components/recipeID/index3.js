import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeByIdAction } from "../../actions";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import Header from "../layout/Header";
const Container = styled.div`
  max-width: 85%;
  margin: 0 auto;
  .content {
    display: flex;
    grid-template-rows: 10% auto 15%;
  }
`;

const RecipeId = () => {
  const dispatch = useDispatch();
  const { recipeId } = useSelector((state) => state);
  let { id } = useParams();
  useEffect(() => {
    dispatch(getRecipeByIdAction(id));
  }, []);
  const [ingredients, setIngredients] = useState([]);
  const [stepsAll, setStepsAll] = useState([]);
  const {
    image,
    healthScore,
    spoonacularScore,
    summary,
    steps,
    aggregateLikes,
    readyInMinutes,
    diets,
    createdInDb,
  } = recipeId;

  useEffect(() => {
    if (steps && !createdInDb && steps.length > 0) {
      const ingred = steps[0].map((e) => e.ingredients);
      let getIngred = ingred.flat();
      let hash = {};
      getIngred = getIngred.filter(function (current) {
        var exists = !hash[current.id];
        hash[current.id] = true;
        return exists;
      });
      const ingreds = getIngred.map((e) => e.name);
      setIngredients(ingreds);
      const allStep = steps[0].map((e) => e.step);
      setStepsAll(allStep);
    }
  }, [recipeId]);
  return Object.keys(recipeId).length > 0 ?  (
    <Container>
      <Header />
      <div className="content">
        <div className="left">
          <h1 className="titulo">{recipeId.title}</h1>
          <div className="icons">
            <span>
              {healthScore} &#10084; &emsp; &emsp; &#128077;
              {!createdInDb ? aggregateLikes : recipeId.likes} &emsp; &emsp;
              &#128337;{readyInMinutes}&emsp; &emsp; &#9733;{spoonacularScore}{" "}
            </span>
          </div>
          <div className="diets">
            {createdInDb
              ? recipeId.TypeOfDiets.length > 0 &&
                recipeId.TypeOfDiets.map((d) => (
                  <span className="diets" key={d.id}>
                    {d.name},{" "}
                  </span>
                ))
              : diets.map((d, i) => <span key={i}>{d}, </span>)}
          </div>
          <div className="ingredients">
            ingredients:
            {!createdInDb
              ? ingredients.map((e, i) => <p key={i}> {e}, </p>)
              : recipeId.ingredients.map((e, i) => <p key={i}> {e}, </p>)}
          </div>
        </div>
        <div className="rigth">
          <div className="img">
            <img src={image} alt="image" />
          </div>
        </div>
      </div>
    </Container>
  ): 'loading...';
};

export default RecipeId;
