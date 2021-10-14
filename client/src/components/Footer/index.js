import styled from "styled-components";
import { Link } from "react-router-dom";
const Foot = styled.footer`
  height: 200px;
  display: flex;
  justify-content: space-around;
  font-size: 1.3rem;
  background: linear-gradient(to right, #928dab, #1f1c2c);
  color: white;
  .link {
     display: block;
     padding-bottom: 1rem;
     font-size: 1rem;
     color: white;
    text-decoration-style: double;
  }
  p{
     font-size: 0.7em;
  }
`;
const Footer = () => {
  return (
    <Foot>
      <div className="links">
        <h4>Util links</h4>
        <Link className="link" to="/home">
          Home
        </Link>
        <Link className="link" to="/recipe">
          New Recipe
        </Link>
      </div>
      <div className="about">
        <h4>about</h4>
        <p>Hello everyone, I made this web application for educational purposes and love.    </p>
        <p>I hope you enjoy it</p>
      </div>
    </Foot>
  );
};

export default Footer;
