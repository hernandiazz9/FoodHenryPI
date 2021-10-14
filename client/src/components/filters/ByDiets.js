import { useState, useEffect } from "react";
import { filterRecipeAction, filterReset } from "../../actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Container = styled.ul`
  color: #000000a9;
  text-align: left;
  line-height: 1.3rem;
  li{
    /* font-size: 1rem; */
    color: #00000065;
    text-transform: capitalize;
    list-style-type: disclosure-closed;
    margin: 5px 5px 5px 5px ;
  }
  .diets{
    font-size: 1.4em;
    padding-left: 1rem;
    background-color: #f7f7f7b3;
    padding-left:.4rem;
    padding-right:.8rem;
    padding: 3px 8px 3px 8px ;
    border-radius: .5rem;
    transition: all ease-in-out .1s;
    :hover{
      font-size: 1.5em;
      cursor: pointer;
      color: #000000a0;
    }
  }
`;

const ByDiets = ({ diets }) => {
  const dispatch = useDispatch();
  const [dietsFilter, setDietsFilter] = useState([]);

  useEffect(() => {
    dispatch(filterReset());
    if (dietsFilter.length > 0) dispatch(filterRecipeAction(dietsFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <label className='diets' >
            <input
            type="checkbox"
            name={e.name}
            value={e.name}
            onChange={onChange}
            />
            {e.name}

            </label>
          </li>
        ))}
    </Container>
  );
};

export default ByDiets;
