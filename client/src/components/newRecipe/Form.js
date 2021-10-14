import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecipeAction } from "../../actions";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import InputDiets from "./InputDiets";
import InputSteps from "./InputSteps";
import InputIngredients from "./InputIngredients";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  padding-top: 1rem;
  .content {
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
        font-size: 1.4em;
        color: #0000009a;
      }
      .ingredients-steps {
        display: flex;
        justify-content: space-between;
        /* flex-wrap: nowrap; */
        .data {
          padding-top: 1rem;
          text-align: center;
          font-size: 1.2rem;
          color: #0000009a;
        }
      }
      .button-container {
        padding-top: 2rem;
        text-align: center;
      }
    }
  }
  p {
    font-size: 1.5em;
    letter-spacing: 5px;
    color: #000000c2;
  }
  .side {
    width: 30%;

    text-align: center;
    /* align-items: center; */
    /* margin: auto; */
    span {
      color: #0000009a;
      /* padding: 0rem 2rem 3rem 0rem; */
    }
  }
  .health {
    padding-bottom: 1rem;
  }
`;
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
const TextArea = styled.textarea`
  padding: 0.35em 3.3em;
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
const Form = () => {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    healthScore: 0,
    spoonacularScore: 0,
    steps: [],
    image: "",
    ingredints: [],
    aggregateLikes: 0,
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
  } = form;
  const history = useHistory();
  const submit = (e) => {
    e.preventDefault();
    if (!form.title || !form.summary) return;
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
    alert('Recipe created')
    history.push("/home");

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
              <Input
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
              <TextArea
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
                <div className="health">
                  <span>cookin time</span>
                  <Input
                    type="number"
                    step="10"
                    value={readyInMinutes}
                    min="0"
                    max="100"
                    name="readyInMinutes"
                    onChange={onChange}
                  />
                </div>
                <span>Ingredients</span>
                <InputIngredients setForm={setForm} />
                <div className="data">
                  {ingredients &&
                    ingredients.length > 0 &&
                    ingredients.map((e, i) => <div key={i}>- {e}</div>)}
                </div>
              </div>
              <div>
                <div className="health">
                  <span>health score</span>
                  <Input
                    type="number"
                    step="10"
                    value={healthScore}
                    min="0"
                    max="100"
                    name="healthScore"
                    onChange={onChange}
                  />
                </div>
                <span>Steps</span>
                <InputSteps setForm={setForm} />
                <div className="data">
                  {steps &&
                    steps.length > 0 &&
                    steps.map((e, i) => (
                      <div key={i}>
                        {i + 1} - {e}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="button-container">
              <Button
                style={{ padding: "10px 8rem" }}
                className="button-create"
                size="60"
                type="submit"
              >
                Create
              </Button>
            </div>
          </div>
        </div>
        <div className="side">
          <div className="container-content">
            <Input
              type="text"
              onChange={onChange}
              name="image"
              placeholder="Image URL"
              value={image}
            />
            <InputDiets form={form} setForm={setForm} />
          </div>
        </div>
      </Container>
    </form>
  );
};

export default Form;
