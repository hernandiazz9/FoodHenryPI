import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByApi } from "../../actions";
import styled from "styled-components";

const Button = styled.div`
  button {
    padding: 0.35em 1.2em;
    border: 0.1em solid #ffffff;
    margin: 0 0.3em 0.3em 0;
    border-radius: 0.12em;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: #ffffff;
    text-align: center;
    transition: all 0.2s;
    color: #00000071;
    :hover {
      color: #000000;
      background-color: #ffffff;
    }
  }
`;
const ByApi = () => {
  const dispatch = useDispatch();
  const [order, setorder] = useState(true);
  const onclick = () => {
    setorder((o) => !o);
    dispatch(filterByApi(order));
  };

  return (
    <Button>
      <button type="button" onClick={onclick}>
       by api 
      </button>
    </Button>
  );
};

export default ByApi;
