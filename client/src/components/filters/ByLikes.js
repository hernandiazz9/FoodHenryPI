import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByLikesAction } from "../../actions";

const ByScore = () => {
  const dispatch = useDispatch();
  const [order, setorder] = useState(true);
  const onclick = () => {
    setorder((o) => !o);
    dispatch(orderByLikesAction(order));
  };

  return (
    <div>
      <button type="button" onClick={onclick}>
        Sort By Likes {order ? "asc" : "desc"}
      </button>
    </div>
  );
};

export default ByScore;
