import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecipeAction } from "../../actions";

import Header from "../layout/Header";

import InputDiets from "./InputDiets";

const NewRecipe = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    summary: "",
    spoonacularScore: 0,
    healthScore: 0,
    steps: ["1", "2"],
    image: "",
    cusines: [],
    aggregateLikes: 0,
    dishTypes: ["side dish", "algo mas"],
    readyInMinutes: 0,
    diets: ["vegan", "primal"],
    createdInDb: true,
  });
  const {title, summary, spoonacularScore,healthScore,steps, image,readyInMinutes} = form;

  const submit = (e) => {
    e.preventDefault();
    dispatch(createRecipeAction(form));
  };

  const onChange = (e) => {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <Header />
      <h1>Write your Recipe</h1>
      <form onSubmit={submit}>
        <div>
          <label>
            Recipe Name 
            <input
              type="text" size="24" required name="title"
              onChange={onChange}
              value={title}
              placeholder=""
            />
          </label>
        </div>
        <div>
          <label>
            Dish Sumary
            <textarea 
              onChange={onChange}
              name={summary} cols="20" rows="3" minLength="5"
              maxLength="500" required
             />   
          </label>
        </div>
        <div>
          <label>
            Score
            <input
              type="number" step="1" value={spoonacularScore} min="0" 
              max="100" required
              name="spoonacularScore"
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            healthy Food Level
            <input
              type="number" step="1" value={healthScore} min="0" max="100" 
              name="healthScore"
              onChange={onChange}
              placeholder=""
            />
          </label>
        </div>
        <div>
          <label>
            Cooking Time
            <input
              type="number" step="1" value={readyInMinutes} min="0" max="100"
              name='readyInMinutes'
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            steps
            <input
              type="text"
              name="steps"
              onChange={onChange}
              placeholder=""
            />
          </label>
        </div>
        <div>
          <label>
            image
            <input
              type="file"
              name="image"
              onChange={onChange}
              placeholder=""
            />
          </label>
        </div>
        <InputDiets setForm={setForm} />
        <div>
          <label>
            submit
            <input type="submit" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default NewRecipe;

// title,
// summary,
// spoonacularScore,
// healthScore,
// steps,
// image,
// cusines,
// aggregateLikes,
// dishTypes,
// readyInMinutes,
// diets,
// createdInDb,
// {
//     "title": "una zapi joyasa  ",
//     "summary":"algo",
//     "spoonacularScore":"100",
//     "healthScore":"100",
//     "steps":["1","2"],
//     "image":"",
//     "cusines":["q","w"],
//     "aggregateLikes":"34",
//     "dishTypes":["side dish","algo mas"],
//     "readyInMinutes":"45",
//     "diets":["vegan","primal"]
// }
