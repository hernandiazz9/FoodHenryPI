import { useState, useEffect } from "react";
import { filterRecipeAction, filterReset } from "../../actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Container = styled.ul`
  color: #000000a9;
  text-align: left;
  line-height: 1.3rem;
  li{
    font-size: .8rem;
    color: #0000009d;
    text-transform: capitalize;
    list-style-type: disclosure-closed;
  }
  .diets{
    font-size: 1.2em;
    padding-left: 1rem;
  }
`;

const ByDiets = ({ diets }) => {
  const dispatch = useDispatch();
  const [dietsFilter, setDietsFilter] = useState([]);

  useEffect(() => {
    dispatch(filterReset());
    if (dietsFilter.length > 0) dispatch(filterRecipeAction(dietsFilter));
  }, [dietsFilter]);

  const onChange = (e) => {
    setDietsFilter((r) => {
      if (!r.length > 0) return [e.target.value];
      if (!dietsFilter.includes(e.target.value)) {
        return [...r, e.target.value];
      } else {
        const filter = r.filter((c) => c !== e.target.value);
        return filter;
      }
    });
  };

  return (
    <Container>
      {diets &&
        diets.map((e, i) => (
          <li key={i}>

            <input
              type="checkbox"
              name={e.name}
              value={e.name}
              onChange={onChange}
            />
            <span className='diets'>{e.name}</span>
          </li>
        ))}
    </Container>
  );
};

export default ByDiets;
