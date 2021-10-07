import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByNameAction } from "../../actions";

const ByName = () => {
  const dispatch = useDispatch();
  const [order, setorder] = useState(true);
  const onclick = () => {
    setorder((o) => !o);
    dispatch(orderByNameAction(order));
  };
  /*
   PRECION BOTON DE ORDERBYNAME, 
   GENERO UN DISPARCH A UN ACTION,   
   GENERO UN TYPE ORDER_BY_NAME Y LE MANDO UN PAYLOAD DE ACENDE O DECEND
   REALIZO LA ACTUALIZACION DE ALLRECIPES sort() o reverse()
  */
  return (
    <div>
      <button type="button" onClick={onclick}>
        Sort By Name {order ? "asc" : "desc"}
      </button>
    </div>
  );
};

export default ByName;
