import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./layout/Header";
import Side from "./layout/Side";
// import Cards from "./Cards";
import Footer from "./Footer";
import Paginator from "./Pagination/App";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { getRecipeAction } from "../actions";
import App from "./pagination2/App";

const Container = styled.div`
  .grid {
    display: grid;
    margin: 0 auto;
    max-width: 95%;
    height: 100vh;
    grid-template-columns: 200px auto;
    grid-template-rows: 70px minmax(160px, auto) auto;
    grid-template-areas:
      "header header"
      "leftbar main"
      "leftbar main"
      "leftbar main"
      "footer footer";
    column-gap: 20px;
    row-gap: 20px;
  }
  @media (max-width: 768px) {
    .grid {
      grid-template-areas:
        "header header"
        "leftbar leftbar"
        "main main"
        "footer footer";
    }
  }
  .page-header {
    grid-area: header;
  }
  .page-leftbar {
    grid-area: leftbar;
    background-color: #e6e3dc;
    border-radius: 12px;
  }
  .page-main {
    grid-area: main;
    background-color: #e6e3dc;
    border-radius: 12px;
  }
  .page-footer {
    grid-area: footer;
    background-color: #e6e3dc;
    border-radius: 12px;
  }
  .content {
    /* color: #242424; */
    /* background-color: black; */
    font-weight: 600;
    text-align: center;
    box-sizing: border-box;
    height: 100%;
    padding: 10px;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipeAction());
  }, []);

  return (
    <Container>
      <div className="grid">
        <header className="page-header">
          <div className="content">
            <Header />
          </div>
        </header>
        <aside className="page-leftbar">
          <div className="content">
            <Side />
          </div>
        </aside>
        <main className="page-main">
          <div className="content">
            {/* <Paginator /> */}
            <App/>
          </div>
        </main>
        <footer className="page-footer">
          <div className="content">
            <Footer />
          </div>
        </footer>
      </div>
    </Container>
  );
};

export default Home;
