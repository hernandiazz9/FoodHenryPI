import ByDiets from "../filters/ByDiets";
import ByName from "../filters/ByName";
import ByScore from "../filters/ByScore";
import ByHealtScore from "../filters/ByHealtScore";
import ByLikes from "../filters/ByLikes";
import ByTimePreparation from "../filters/ByTimePreparation";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding-left: 1.5rem;
  flex-direction: column;
  justify-content: right;
  align-items: flex-start;
`;


const Filters = () => {
const { diets } = useSelector(state => state)
return (
    <Container>
      <h3>Filters</h3>
      <span>By Diets: </span>
      <ByDiets diets={diets} />
      <ByName />
      <ByScore />
      <ByHealtScore />
      <ByLikes />
      <ByTimePreparation />
    </Container>
  );
};

export default Filters;
