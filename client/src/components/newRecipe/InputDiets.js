import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiltersAction } from "../../actions";
import styled from "styled-components";

const Container = styled.div`
  font-size: 0.8rem;
  line-height: 1.6rem;
  text-transform: capitalize;
  padding: 1rem;
  color: #00000096;
  p {
    color: #00000097;
  }
  label {
    font-size: 1rem;
    display: block;
    background-color: #f7f7f7;
    border-radius: 0.5rem;
    transition: all ease-in-out 0.1s;
    margin-bottom: 0.1rem;
    :hover {
      font-size: 1.1rem;
      cursor: pointer;
    }
  }
`;
const InputDiets = ({ setForm }) => {
  const dispatch = useDispatch();
  const { diets } = useSelector((state) => state);
  const [dietsSelected, setDietsSelected] = useState([]);
  useEffect(() => {
    dispatch(getFiltersAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setForm((form) => ({
      ...form,
      diets: dietsSelected,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dietsSelected]);

  const onChange = (e) => {
    setDietsSelected((r) => {
      if (!r.length > 0) return [e.target.value];
      if (!dietsSelected.includes(e.target.value)) {
        return [...r, e.target.value];
      } else {
        const filter = r.filter((c) => c !== e.target.value);
        return filter;
      }
    });
  };
  return (
    <Container>
      <p>Select Type of Diets</p>
      {diets
        ? diets.map((e, i) => (
            <label key={i}>
              <input type="checkbox" value={e.name} onChange={onChange} />
              {e.name}
            </label>
          ))
        : "loading..."}
    </Container>
  );
};

export default InputDiets;

// ,
// () =>
// setForm((form) => ({
//   ...form,
//   diets: dietsSelected,
// }))
// );
