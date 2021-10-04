import {
  GET_RECIPES,
  GET_RECIPES_OKEY,
  GET_RECIPES_ERROR,
  SEARCH_RECIPES,
  SEARCH_RECIPES_OKEY,
  SEARCH_RECIPES_ERROR,
  FILTER_RECIPES,
  GET_FILTER,
  GET_FILTER_OKEY,
  GET_FILTER_ERROR,
  FILTER_RECIPES_RESET,
} from "../types";

const initialState = {
  allRecipe: [],
  allRecipeBackUp:[],
  loading: false,
  error: "",
  diets: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) { 
    case GET_RECIPES:
      return { ...state, loading: action.payload };
    case GET_RECIPES_OKEY:
      return { ...state, loading: false,allRecipeBackUp:action.payload, allRecipe: action.payload };
    case GET_RECIPES_ERROR:
      return { ...state, loading: false, error: action.payload };

    case SEARCH_RECIPES:
      return { ...state, loading: action.payload };
    case SEARCH_RECIPES_OKEY:
      return { ...state, loading: false, allRecipe: action.payload };
    case SEARCH_RECIPES_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FILTER_RECIPES:
      return {
        //tengo el backup cuando saco el filter, debo actuliazar el no backup con el backup siempre
        ...state,
        allRecipe: [
          ...state.allRecipe.filter((e) => {
            // if(!action.payload.legth>0)return true
            if (!e.createdInDb) {
              const data = action.payload.map((r) => e.diets.includes(r));
              return data.find((e) => e === true);
            } else {
              const diets = e.TypeOfDiets.map((e) => e.name);
              const data = action.payload.map((r) => diets.includes(r));
              return data.find((e) => e === true);
            }
          }),
        ],
      };
    case FILTER_RECIPES_RESET:
      return {...state, allRecipe:state.allRecipeBackUp }
    case GET_FILTER:
      return { ...state, loading: action.payload };
    case GET_FILTER_OKEY:
      return { ...state, loading: false, diets: action.payload };
    case GET_FILTER_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default todos;
