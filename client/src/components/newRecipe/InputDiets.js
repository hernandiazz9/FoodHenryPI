import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiltersAction } from "../../actions";

const InputDiets = ({ setForm }) => {
  const dispatch = useDispatch();
  const { diets } = useSelector((state) => state);
  const [dietsSelected, setDietsSelected] = useState([]);
  useEffect(() => {
    dispatch(getFiltersAction());
  }, []);

  const onChange = (e) => {
    setDietsSelected(
      (r) => {
        if (!r.length > 0) return [e.target.value];
        if (!dietsSelected.includes(e.target.value)) {
          return [...r, e.target.value];
        } else {
          const filter = r.filter((c) => c !== e.target.value);
          return filter;
        }
      }
      );
  };
  return (
    <div>
      &#128077;
      {diets
        ? diets.map((e, i) => (
            <label key={i}>
              <input type="checkbox" value={e.name} onChange={onChange} />
              {e.name}
            </label>
          ))
        : "hola"}
    </div>
  );
};

export default InputDiets;
