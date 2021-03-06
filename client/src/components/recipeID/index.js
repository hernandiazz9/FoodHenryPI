import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeByIdAction } from "../../actions";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../layout/Header";
import Footer from "../Footer";

const Container = styled.div`
  color: #000000c7;

  .grid {
    display: grid;
    margin: 0 auto;
    max-width: 92%;
    height: 100vh;
    grid-template-columns: auto;
    grid-template-rows: 9% auto 15%;
    grid-template-areas:
      "header "
      "main  "
      "footer ";
    column-gap: 20px;
    row-gap: 20px;
  }
  @media (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .page-header {
    grid-area: header;
  }
  .page-main {
    grid-area: main;
    background-color: #e6e3dc;
    border-radius: 12px;
  }
  .page-footer {
    grid-area: footer;
    background-color: #e6e3dc;
    border-radius: 12px;
  }
  .content {
    /* color: #242424; */
    /* background-color: black; */
    font-weight: 600;
    text-align: center;
    box-sizing: border-box;
    height: 100%;
    padding: 10px;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    /* align-items: center; */
  }
  .left {
    width: 55%;
    padding: 1rem;
  }
  .right {
    width: 45%;
    img {
      padding-top: 1rem;
      max-width: 90%;
    }
  }
  .titulo {
    font-size: 2.6rem;
  }
  span {
    font-size: 1.3rem;
  }
  span .diets {
    color: #0000003d;
    letter-spacing: 4rem;
  }
  .img {
    padding-top: 2rem;
    align-items: center;
  }
  .diets {
    padding-top: 0.8rem;
  }
  .ingredients {
    text-align: left;
    font-size: 1rem;
    padding-left: 4rem;
  }
  .summary {
    font-size: 1rem;
    color: #414141b9;
    letter-spacing: 1px;
    line-height: 1.3rem;
  }
  .steps-ingredients {
    max-width: 90%;
    margin: 0 auto;
    text-align: left;
    display: grid;
    grid-template-columns: 60% 40%;
    margin: 0 auto;
    .ingredients {
      font-size: 1.2rem;
      color: #414141b9;
      margin: 0 auto;
      h3 {
        color: #414141;
        font-size: 1.7rem;
      }
    }
    .steps {
      font-size: 1rem;
      color: #414141b9;

      h3 {
        color: #414141;
        font-size: 1.7rem;
      }
    }
  }
`;

const RecipeId = () => {
  const dispatch = useDispatch();
  const { recipeId } = useSelector((state) => state);
  let { id } = useParams();
  useEffect(() => {
    dispatch(getRecipeByIdAction(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeId]);

  return Object.keys(recipeId).length > 0 ? (
    <Container>
      <div className="grid">
        <header className="page-header">
          <div className="content">
            <Header />
          </div>
        </header>
        <main className="page-main">
          <div className="content container">
            <div className="left">
              <h1 className="titulo">{recipeId.title}</h1>
              <span className="subtle">
                {healthScore} &#10084; &emsp; &emsp; &#128077;
                {!createdInDb ? aggregateLikes : recipeId.likes} &emsp; &emsp;
                &#128337;{readyInMinutes}&emsp; &emsp; &#9733;{spoonacularScore}{" "}
              </span>
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
              <p
                className="summary"
                dangerouslySetInnerHTML={{ __html: summary }}
              />
            </div>
            <div className="right">
              <div className="img">
                <img src={image} alt="recipe food" />
              </div>
            </div>
            <div className="steps-ingredients">
              <div className="steps">
                <h3>Steps:</h3>
                {!createdInDb
                  ? stepsAll.map((e, i) => (
                      <p key={i}>
                        {" "}
                        {i + 1}-{e}{" "}
                      </p>
                    ))
                  : steps.map((e, i) => (
                      <p key={i}>
                        {" "}
                        {i + 1}-{e}{" "}
                      </p>
                    ))}
              </div>
              <ul className="ingredients">
                <h3>Ingredients:</h3>
                
                {!createdInDb
                  ? ingredients.map((e, i) => <li key={i}> {e}, </li>)
                  : recipeId.ingredients.map((e, i) => <li key={i}> {e}, </li>)}
              </ul>
            </div>
          </div>
        </main>
        <footer className="page-footer">
          <div className="content">
            <Footer />
          </div>
        </footer>
      </div>
    </Container>
  ) : (
    "loading..."
  );
};

export default RecipeId;
