
import {useEffect, useState} from 'react';

import Header from "../layout/Header";
import Side from "../layout/Side";

const NewRecipe = () => {
  const submit = () => {};
  return (
    <div>
      <Header />
      <form onSubmit={submit}>
        <div>
          <label htmlFor="">Recipe Name </label>
          <input 
            type="text" 
            
         />
        </div>
        <div>
          <label htmlFor="">dishSumary </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Score </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">healthyFoodLevel </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">steps </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">image </label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default NewRecipe;
