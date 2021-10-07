import { useEffect } from "react";
import styled from "styled-components";
import { getFiltersAction } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import ByDiets from "../filters/ByDiets";
import ByName from "../filters/ByName";
import ByScore from "../filters/ByScore";
import ByHealtScore from "../filters/ByHealtScore";
import ByLikes from "../filters/ByLikes";
import ByTimePreparation from "../filters/ByTimePreparation";

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
      <ByDiets  diets={diets}  />
      <ByName />
      <ByScore />
      <ByHealtScore />
      <ByLikes />
      <ByTimePreparation />
    </Container>
  );
};

export default Side;
