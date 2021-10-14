import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { searchRecipeAction } from "../../actions";
import styled from "styled-components";
import { useHistory } from 'react-router-dom'


const Container = styled.div`
  button {
    display: inline-block;
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
  input{
    border-radius: 0.12em;
    font-family: "Roboto", sans-serif;
    border: 0.1em solid #ffffff;

    padding: 0.35em 1.2em;
  }
  span{
    color: red;
    display: block;
  }
`;
const SearchBar = () => {
  const { error } = useSelector(state => state)
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const history = useHistory()
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if(search==='')return
    dispatch(searchRecipeAction(search));
    setSearch('')
    history.push('/home')
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <button type="submit" >search</button>
        <input type="search" onChange={onChange} placeholder='Search' size='18' name={search} />
        {error&&<span>{error}</span>}
      </form>
    </Container>
  );
};

export default SearchBar;

