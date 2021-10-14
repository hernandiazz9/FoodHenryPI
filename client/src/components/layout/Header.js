import SearchBar from "../searchBar";
// import Favourite from "../filters";
import Diets from "../filters/ByDiets";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  .menu-bar {
    border-radius: 12px;
    background-color: #e6e3dc;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .item {
    display: inline-block;
    box-sizing: border-box;
    padding: 20px 20px;
    text-decoration: none;
  }
  .recipe{
    color: black;
    font-size: 2rem;
  }
  .app{
    color: #00000065;
    font-size: 2rem;
  }
  .item:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Container>
      <nav className="menu-bar">
        <div className="group">
          <Link to="/home" className="item title">
            <span className='recipe'> RECIPE</span>
            <span className='app'>APP</span>
          </Link>
          
        </div>
        <div className="group">
          <div  className="item">
            <SearchBar />
          </div>
          <div className="item">
            <Diets />
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
