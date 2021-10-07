import { useState, useEffect } from "react";
// import styled from "styled-components";
import Cards from "../Cards";
import { useSelector } from "react-redux";

const Paginator = () => {
  const { allRecipe } = useSelector((state) => state);
  const [actualPage, setActualPage] = useState(1);
  const [allPage, setAllPage] = useState(1);
  const [currentRecipes, setCurrentRecipes] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState([]);
  const recipePerPage = 3;
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
    <div>
      <Cards currentRecipes={currentRecipes} />
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
      {" . . . "}
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
      {" . . . "}
      <button
        onClick={() => setActualPage(allPage)}
        disabled={actualPage === allPage}
        type="button"
      >
        {allPage}
      </button>
      <button onClick={next} disabled={actualPage === allPage} type="button">
        Next &raquo;
      </button>
    </div>
  );
};

export default Paginator;
