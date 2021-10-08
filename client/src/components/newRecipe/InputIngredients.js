import { useState, useEffect } from "react";

const InputIngredients = ({ setForm }) => {
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");

  const onchange = (e) => {
    setIngredient(e.target.value);
  };
  const onclick = (e) => {
    e.preventDefault();
    setIngredients((i) => [...i, ingredient]);
  };
  useEffect(() => {
    setForm((e) => ({
      ...e,
      ingredients,
    }));
  }, [ingredients]);
  return (
    <>
      <input onChange={onchange} type="text" />
      <button onClick={onclick} type="submit">
        add
      </button>
    </>
  );
};

export default InputIngredients;
