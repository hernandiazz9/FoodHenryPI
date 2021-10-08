import { useEffect } from "react";
import styled from "styled-components";
import { getFiltersAction } from "../../actions";
import { useDispatch } from "react-redux";


import Filters from "../filters";
import SearchBar from "../searchBar";

const Container = styled.div`
  position: sticky;
  top: 10px;
`;

const Side = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getFiltersAction())
  }, []);


  return (
    <Container>
      <SearchBar />
      <Filters />
    </Container>
  );
};

export default Side;
