import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByHealthScoreAction } from "../../actions";

const ByScore = () => {
  const dispatch = useDispatch();
  const [order, setorder] = useState(true);
  const onclick = () => {
    setorder((o) => !o);
    dispatch(orderByHealthScoreAction(order));
  };

  return (
    <div>
      <button type="button" onClick={onclick}>
        Sort By Health Score {order ? "asc" : "desc"}
      </button>
    </div>
  );
};

export default ByScore;
