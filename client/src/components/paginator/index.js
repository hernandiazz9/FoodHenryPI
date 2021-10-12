import { useState, useEffect } from "react";
// import styled from "styled-components";
import Cards from "../Cards";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  .paginator {
    margin-top: 2rem;
    position: relative;
  }
  .bar {
    position: absolute;
    bottom: 2rem;
    left: 12rem;
  }
  button {
    display: inline-block;
    padding: 0.35em 1.2em;
    border: 0.1em solid #ffffff;
    margin: 0 0.3em 0.3em 0;
    border-radius: 0.12em;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: #ffffff;
    text-align: center;
    transition: all 0.2s;
    color: #00000071;
    :hover {
      color: #000000;
      background-color: #ffffff;
    }
  }
  .dot {
    color: #0000004b;
    letter-spacing: 0.4rem;
    font-size: 2rem;
  }
  .cards{
    padding-bottom: 6rem;
  }
`;

const Paginator = () => {
  const { allRecipe } = useSelector((state) => state);
  const [actualPage, setActualPage] = useState(1);
  const [allPage, setAllPage] = useState(1);
  const [currentRecipes, setCurrentRecipes] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState([]);
  const recipePerPage = 5;
  // bottom numbers paginator
  useEffect(() => {
    const numberOfPages = [];
    if (allRecipe.length > 0 && numberOfPages.length === 0)
      for (let i = 1; i <= allPage; i++) numberOfPages.push(i);
    const indexOfFirstpage =
      actualPage >= allPage - 2 ? allPage - 3 : actualPage - 1;
    const indexOfLastPage = indexOfFirstpage + 4;
    const currentNumbers = numberOfPages.slice(
      indexOfFirstpage,
      indexOfLastPage
    );
    setNumberOfPages(currentNumbers);
  }, [allPage, actualPage]);
  // Number of recipes
  useEffect(() => {
    const allPages = Math.ceil(allRecipe.length / recipePerPage);
    setAllPage(allPages);
    const indexOfLastRecipe = actualPage * recipePerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipePerPage;
    const currentRecipes = allRecipe.slice(
      indexOfFirstRecipe,
      indexOfLastRecipe
    );
    setCurrentRecipes(currentRecipes);
  }, [actualPage, allRecipe]);

  const next = () => {
    const newActualPage = actualPage + 1;
    if (newActualPage > allPage) return;
    setActualPage(newActualPage);
  };
  const before = () => {
    const newActualPage = actualPage - 1;
    if (newActualPage === 0) return;
    setActualPage(newActualPage);
  };

  return (
    <Container>
      <div className='cards'>
        <Cards currentRecipes={currentRecipes} />
      </div>
      <div className="paginator">
        <div className="bar">
          <button onClick={before} disabled={actualPage === 1} type="button">
            &laquo; Before
          </button>
          <button
            onClick={() => setActualPage(1)}
            disabled={actualPage === 1}
            type="button"
          >
            1
          </button>
          <span className="dot"> . . . </span>
          {numberOfPages.map(
            (n, i) =>
              n !== allPage &&
              n !== 1 && (
                <button
                  key={i}
                  disabled={actualPage === n}
                  onClick={() => setActualPage(n)}
                  type="button"
                >
                  {n}
                </button>
              )
          )}
          <span className="dot"> . . . </span>

          <button
            onClick={() => setActualPage(allPage)}
            disabled={actualPage === allPage}
            type="button"
          >
            {allPage}
          </button>
          <button
            onClick={next}
            disabled={actualPage === allPage}
            type="button"
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Paginator;
