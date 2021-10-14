import { Link } from "react-router-dom";
import "./card.css";

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
  } = recipe;

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
