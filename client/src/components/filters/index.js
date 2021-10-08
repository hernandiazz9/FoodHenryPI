import ByDiets from "../filters/ByDiets";
import ByName from "../filters/ByName";
import ByScore from "../filters/ByScore";
import ByHealtScore from "../filters/ByHealtScore";
import ByLikes from "../filters/ByLikes";
import ByTimePreparation from "../filters/ByTimePreparation";
import { useSelector } from "react-redux";

const Filters = () => {
const { diets } = useSelector(state => state)
return (
    <div>
      <ByDiets diets={diets} />
      <ByName />
      <ByScore />
      <ByHealtScore />
      <ByLikes />
      <ByTimePreparation />
    </div>
  );
};

export default Filters;
