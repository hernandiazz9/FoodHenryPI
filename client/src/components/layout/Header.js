import SearchBar from "../searchBar";
// import Favourite from "../filters";
import Diets from '../filters/ByDiets'
import {Link} from 'react-router-dom'


import styled from "styled-components";

const Container = styled.div`
  .menu-bar {
    background-color: #1988f7;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .item {
    color: white;
    background-color: transparent;
    font-size: 18px;
    display: inline-block;
    box-sizing: border-box;
    padding: 14px 20px;
  }
  .item.title {
    font-weight: 600;
    padding-left: 60px;
    text-decoration: none;
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
          <Link to='/home' className="item title">LOGO</Link>
          <Link to='/recipe' className="item title">recipe</Link>
        </div>
        <div className="group">
          <a className="item">
            <SearchBar />
          </a>
          <a className="item">
            <Diets />
          </a>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
