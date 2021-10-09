import { Link } from "react-router-dom";
import styled from "styled-components";
import "./card.css";

const Container = styled.div``;
const Card = ({ recipe }) => {
  const {
    aggregateLikes,
    cusines,
    diets,
    dishTypes,
    healthScore,
    image,
    title,
    createdInDb,
    readyInMinutes,
    spoonacularScore,
    id
  } = recipe;
  console.log(recipe, "/recipesssssss");
  return recipe ? (
    <div className="card-container">
      <div className="card u-clearfix">
        <div className="card-body">
          <span className="card-author subtle"> 
          {healthScore} &#10084; &emsp; &emsp; &#128077;
          {!createdInDb ? aggregateLikes : recipe.likes} &emsp; &emsp;  &#128337;{readyInMinutes}&emsp; &emsp; &#9733;{spoonacularScore} </span>
          <h2 className="card-title">{title}</h2>
          <span className="card-description subtle">
            {dishTypes && !createdInDb &&
              dishTypes.map((type, i) => <span key={i}>{type} </span>)}
            |{cusines&& !createdInDb && cusines.map((e, i) => <span key={i}> {e} </span>)}|
            {!createdInDb
              ? diets.map((e, i) => <span key={i}> {e} </span>)
              : recipe.TypeOfDiets.map((e, i) => (
                  <span key={i}> {e.name} </span>
                ))}
          </span>
          <div className="card-read">
            <Link to={`/recipes/${recipe.id}`} >Read</Link>
          </div>
        </div>
        <img src={image} alt="" className="card-media" />
      </div>
      <div className="card-shadow"></div>
    </div>
  ) : (
    "cargando..."
  );
};

export default Card;

/*
aggregateLikes: 3689
cuisines: (2) ['Chinese', 'Asian']
dishTypes: ['side dish']
healthScore: 76
id: 716426
image: "https://spoonacular.com/recipeImages/716426-312x231.jpg"
readyInMinutes: 30
spoonacularScore: 99
summary: "Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199\">Vegetable Fried Brown Rice</a>, <a href=\"https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261\">Vegetable Fried Cauliflower Rice</a>, and <a href=\"https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042\">Easy Vegetable Fried Brown Rice with Egg</a>."
title: "Cauliflower, Brown Rice, and 

*/
