import { useEffect } from "react";
import styled from "styled-components";
import { getFiltersAction } from "../../actions";
import { useDispatch } from "react-redux";


import Filters from "../filters";

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
      <Filters />
    </Container>
  );
};

export default Side;
