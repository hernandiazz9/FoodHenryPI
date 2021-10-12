import { Link } from "react-router-dom";
import styled from "styled-components";
import bgGif from "../img/bgGif.gif";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bgGif});
  background-repeat: no-repeat;
  background-size: cover;
  h2 {
    font-size: 1.7rem;
    position: absolute;
    top: 26%;
    left: 10%;
  }
  h1 {
    font-size: 5rem;
    position: absolute;
    top: 28%;
    left: 9.5%;
  }
  .home {
    text-decoration: none;
    font-size: 2rem;
    position: absolute;
    top: 49%;
    left: 20%;
    color: white;
    background-color: #ffffff60;
    border-radius: .3rem;
    padding: .1rem .4rem ;
    cursor: pointer;
    transition: all ease-in-out;

    :hover{
    font-size: 2.5rem;

    }
    
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <h2>Welcome to </h2>
      <h1>Recipe APP </h1>
      <Link className="home" to="/home">
        Click me!
      </Link>
    </Container>
  );
};

export default LandingPage;
