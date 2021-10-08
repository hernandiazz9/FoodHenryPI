import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeByIdAction } from "../../actions";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../layout/Header";
import Footer from "../Footer";

const Container = styled.div`
  .grid {
    display: grid;
    margin: 0 auto;
    max-width: 95%;
    height: 100vh;
    grid-template-columns: auto;
    grid-template-rows: 10% auto 25%;
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
  }
  .right {
    width: 45%;
    img {
      padding-top: 1rem;
      max-width: 90%;
    }
  }
  .titulo {
  }
  .img{
      position: sticky;
      top: 10px;

  }
`;

const RecipeId = () => {
  const dispatch = useDispatch();
  const { recipeId } = useSelector((state) => state);
  let { id } = useParams();
  useEffect(() => {
    dispatch(getRecipeByIdAction(id));
  }, []);

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

  console.log(steps[0],'stepssteps');
  if(steps&&!createdInDb&&steps.length>0){

  }
  {!createdInDb&&steps&&steps.length>0&&steps[0].map(s=>{
   s.ingredients.map(i=>(
      <p key={i.id}> {i.name} </p>
   ))
   }) }

  return recipeId ? (
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
              <span>Health Score {healthScore} </span>
              <span>spoonacularScore {spoonacularScore} </span>
              <span>aggregateLikes {aggregateLikes} </span>
              <span>readyInMinutes {readyInMinutes} </span>
              <div>
                {diets&&diets.length > 0 &&
                  diets.map((d, i) => <span key={i}>{d}, </span>)}
              </div>
              <div>
                 ingredientes: 
                 {!createdInDb&&steps&&steps.length>0&&steps[0].map(s=>{
                  s.ingredients.map(i=>(
                     <p key={i.id}> {i.name} </p>
                  ))
                  }) }
              </div>
            </div>
            <div className="right">
              <div className='img'>
                <img src={image} alt="image" />
              </div>
            </div>
            <p>{summary}</p>

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
