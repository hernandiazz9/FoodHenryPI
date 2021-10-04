import { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { getFiltersAction } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Diets from "../filters/Diets";

const Container = styled.div`
  position: sticky;
  top: 10px;
`;

const Side = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getFiltersAction())
  }, []);

const { diets } = useSelector(state => state)

  return (
    <Container>
      <Diets  diets={diets}  />
    </Container>
  );
};

export default Side;
