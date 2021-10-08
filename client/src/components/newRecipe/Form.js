import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecipeAction } from "../../actions";
import styled from "styled-components";

import InputDiets from "./InputDiets";
import InputSteps from "./InputSteps";
import InputIngredients from "./InputIngredients";

const Container = styled.div`
  display: flex;
  .content {
    width: 70%;
    .container-content {
      text-align: left;
      .sumary {
        display: flex;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      span {
        padding-right: 1rem;
      }
      .ingredients-steps {
        display: flex;
        justify-content: space-between;
        .data {
          padding-top: 1rem;
          text-align: center;
        }
      }
      .button-container {
        padding-top: 2rem;
        text-align: center;
      }
    }
  }
  .side {
    width: 30%;
    text-align: center;
    align-items: center;
    margin: auto;
    span {
      padding: 0rem 2rem 3rem 0rem;
    }
    .health{
       margin-top: 1rem;
       margin-bottom: 1rem;
    }
  }
`;
const Form = () => {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    healthScore: 0,
    spoonacularScore:0,
    steps: [],
    image: "",
    ingredints: [],
    aggregateLikes:0,
    readyInMinutes: 0,
    diets: [],
    createdInDb: true,
  });
  const dispatch = useDispatch();
  const {
    title,
    summary,
    healthScore,
    steps,
    image,
    ingredients,
    readyInMinutes,
    diets,
  } = form;

  const submit = (e) => {
    e.preventDefault();
    dispatch(createRecipeAction(form));
    setForm({
      title: "",
      summary: "",
      healthScore: 0,
      steps: [],
      image: "",
      ingredints: [],
      readyInMinutes: 0,
      diets: [],
    });
  };

  const onChange = (e) => {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form onSubmit={submit}>
      <Container>
        <div className="content">
          <div className="container-content">
            <div>
              <span>Recipe Name</span>
              <input
                type="text"
                size="60"
                required
                name="title"
                onChange={onChange}
                value={title}
                placeholder="Title..."
              />
            </div>
            <div className="sumary">
              <span>Dish Sumary</span>
              <textarea
                onChange={onChange}
                name="summary"
                value={summary}
                cols="51"
                rows="3"
                minLength="5"
                maxLength="500"
                required
                placeholder="Sumary..."
              />
            </div>
            <div className="ingredients-steps">
              <div>
                <span>Ingredients</span>
                <InputIngredients setForm={setForm} />
                <div className="data">
                  {ingredients &&
                    ingredients.length > 0 &&
                    ingredients.map((e, i) => (
                      <div key={i}>
                        - {e} <button>x</button>
                      </div>
                    ))}
                </div>
              </div>
              <div>
                <span>Steps</span>
                <InputSteps setForm={setForm} />
                <div className="data">
                  {steps &&
                    steps.length > 0 &&
                    steps.map((e, i) => (
                      <div key={i}>
                        {i + 1} - {e} <button>x</button>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="button-container">
              <button className="button-create" size="30" type="submit">
                Create
              </button>
            </div>
          </div>
        </div>
        <div className="side">
          <div className="container-content">
            <h3>image</h3>
            <input type="file"  />
            <div className='health'>
              <span>health score</span>
              <input
                type="number"
                step="10"
                value={healthScore}
                min="0"
                max="100"
                name="healthScore"
                onChange={onChange}
              />
            </div>
            <div className='health'>
              <span>cookin time</span>
              <input
                type="number"
                step="10"
                value={readyInMinutes}
                min="0"
                max="100"
                name="readyInMinutes"
                onChange={onChange}
              />
            </div>
              <InputDiets form={form} setForm={setForm} />
          </div>
        </div>
      </Container>
    </form>
  );
};

export default Form;
