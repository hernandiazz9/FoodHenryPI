import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByScoreAction } from "../../actions";

const ByScore = () => {
  const dispatch = useDispatch();
  const [order, setorder] = useState(true);
  const onclick = () => {
    setorder((o) => !o);
    dispatch(orderByScoreAction(order));
  };

  return (
    <div>
      <button type="button" onClick={onclick}>
        Sort By Score {order ? "asc" : "desc"}
      </button>
    </div>
  );
};

export default ByScore;
