import styled from "styled-components";

import Header from "../layout/Header";
import Form from "./Form";
import Footer from "../Footer";

const Container = styled.div`
  .grid {
    display: grid;
    margin: 0 auto;
    max-width: 95%;
    height: 100vh;
    grid-template-columns: auto ;
    grid-template-rows: 40px 50px auto auto;
    grid-template-areas:
      "header "
      "head "
      "main  "
      "footer ";
    column-gap: 20px;
    row-gap: 20px;
  }
  @media (max-width: 768px) {
    .grid {
      grid-template-areas:
        "header header"
        "head head"
        "main main"
        "footer footer";
    }
  }
  .page-header {
    grid-area: header;
  }
  .title{
    font-size: 3rem;
    color: #000000a4;
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
  .form {
    text-align: left;
  }
`;

const NewRecipe = () => {
  
  return (
    <Container>
      <div className="grid">
        <header className="page-header">
          <div className="content">
            <Header />
          </div>
        </header>
        
        <main class="page-main">
        <h1 className="title">Write your Recipe</h1>
          <div class="content form">
            <Form  />
          </div>
        </main>
        <footer className="page-footer">
          <div className="content">
            <Footer />
          </div>
        </footer>
      </div>
    </Container>
  );
};

export default NewRecipe;

// title,
// summary,
// spoonacularScore,
// healthScore,
// steps,
// image,
// cusines,
// aggregateLikes,
// dishTypes,
// readyInMinutes,
// diets,
// createdInDb,

//     "title": "una zapi joyasa  ",
//     "summary":"algo",
//     "spoonacularScore":"100",
//     "healthScore":"100",
//     "steps":["1","2"],
//     "image":"",
//     "cusines":["q","w"],
//     "aggregateLikes":"34",
//     "dishTypes":["side dish","algo mas"],
//     "readyInMinutes":"45",
//     "diets":["vegan","primal"]
// }
