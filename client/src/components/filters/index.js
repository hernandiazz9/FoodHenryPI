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
  padding-right: 1rem;
  padding-top: 0.8rem;
  flex-direction: column;

  align-items: center;
  h3 {
    font-size: 1.5rem;
    color: #0000007c;
    line-height: 2px;
    letter-spacing: 24px;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  hr {
    background-color: #00000042;
    height: 1px;
    width: 100%;
  }
  span {
    font-size: 1.3rem;
    color: #0000007c;
  }

  .by-diets {
    width: 100%;
    text-align: left;
    padding-left: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 1.5rem;
    background-color: #adadad71;
    border-radius: 1rem;
    margin-top: 1rem;
    p {
      font-size: 1.3rem;
      margin-top: 0.2rem;
      color: #0000007c;
    }
  }
  .filter-buttons{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Filters = () => {
  const { diets } = useSelector((state) => state);
  return (
    <Container>
      <h3>FILTERS</h3>
      <hr />
      <div className="by-diets">
        <span>By Diets: </span>
        <ByDiets diets={diets} />
      </div>
      <div className="by-diets">
        <p>Sort By:</p>
        <div className='filter-buttons'>
          <ByName />
          <ByScore />
          <ByHealtScore />
          <ByLikes />
          <ByTimePreparation />
        </div>
      </div>
    </Container>
  );
};

export default Filters;
