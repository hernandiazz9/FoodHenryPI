import { useEffect } from "react";

import Header from "./layout/Header";
import Side from "./layout/Side";
import Footer from "./Footer";
import styled from "styled-components";
import Paginator from "./paginator";

import { useDispatch, useSelector } from "react-redux";
import { getRecipeAction, resetErrorAction } from "../actions";

const Container = styled.div`
  .grid {
    display: grid;
    margin: 0 auto;
    max-width: 95%;
    height: 100vh;
    grid-template-columns: 380px auto;
    grid-template-rows: 120px auto auto;
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
  const { error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipeAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setTimeout(() => {
      dispatch(resetErrorAction())
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

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
            <Paginator />
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
