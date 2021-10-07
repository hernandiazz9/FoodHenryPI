import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByTimePreparationAction } from "../../actions";

const ByTimePreparation = () => {
  const dispatch = useDispatch();
  const [order, setorder] = useState(true);
  const onclick = () => {
    setorder((o) => !o);
    dispatch(orderByTimePreparationAction(order));
  };

  return (
    <div>
      <button type="button" onClick={onclick}>
        Sort By Time Preparation {order ? "asc" : "desc"}
      </button>
    </div>
  );
};

export default ByTimePreparation;
