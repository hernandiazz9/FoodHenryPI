import { useEffect } from "react";
import styled from "styled-components";
import { getFiltersAction } from "../../actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Filters from "../filters";
import SearchBar from "../searchBar";

const Container = styled.div`
  position: sticky;
  top: 10px;
  padding-top: 1.3rem;
  .create {
    font-size: 1.5rem;
    margin-top: 1rem;
    
  }
  .create-recipe{
    /* text-decoration: none; */
    color: #805e5e;
    :hover{
      font-size: 1.7rem;
      color: #825252;
    }
  }
`;

const Side = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFiltersAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <SearchBar />
      <div className="create">
        <Link to="/recipe" className="create-recipe ">
          Create New Recipe
        </Link>
      </div>
      <Filters />
    </Container>
  );
};

export default Side;
