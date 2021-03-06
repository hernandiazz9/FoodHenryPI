import { useState, useEffect } from "react";
import styled from "styled-components";
const Input = styled.input`
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
`;
const Button = styled.button`
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
`;
const InputIngredients = ({ setForm }) => {
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");

  const onchange = (e) => {
    setIngredient(e.target.value);
  };
  const onclick = (e) => {
    e.preventDefault();
    if(ingredient==='')return
    setIngredients((i) => [...i, ingredient]);
    setIngredient('')
  };
  useEffect(() => {
    setForm((e) => ({
      ...e,
      ingredients,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredients]);
  return (
    <>
      <Input onChange={onchange} type="text" value={ingredient} />
      <Button onClick={onclick} type="submit">
        add
      </Button>
    </>
  );
};

export default InputIngredients;
