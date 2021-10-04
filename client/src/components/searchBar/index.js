import { useState } from "react";

import { useDispatch } from "react-redux";
import { searchRecipeAction } from "../../actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    dispatch(searchRecipeAction(search));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="submit" value="search" />
        <input type="search" onChange={onChange} placeholder='Search' size='20' name={search} />
      </form>
    </div>
  );
};

export default SearchBar;
