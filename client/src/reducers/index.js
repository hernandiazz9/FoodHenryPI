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
  ORDER_BY_NAME,
  ORDER_BY_SCORE, 
  ORDER_BY_HEALTH_SCORE,
  ORDER_BY_LIKES,
  ORDER_BY_TIME_PREPARATION
} from "../types";

const initialState = {
  allRecipe: [],
  allRecipeBackUp: [],
  loading: false,
  error: "",
  diets: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, loading: action.payload };
    case GET_RECIPES_OKEY:
      return {
        ...state,
        loading: false,
        allRecipeBackUp: action.payload,
        allRecipe: action.payload,
      };
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
      return { ...state, allRecipe: state.allRecipeBackUp };
    case GET_FILTER:
      return { ...state, loading: action.payload };
    case GET_FILTER_OKEY:
      return { ...state, loading: false, diets: action.payload };
    case GET_FILTER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ORDER_BY_NAME:
      return {
        ...state,
        allRecipe:[ 
           ...state.allRecipe.sort((a, b) => {
            let fa = a.title.toLowerCase(),
            fb = b.title.toLowerCase();
            if (fa < fb) return action.payload? -1 : 1;
            if (fa > fb)  return  action.payload? 1 : -1;
            return 0;
          })],
      }
    case ORDER_BY_SCORE:
      return {
        ...state,
        allRecipe:[ 
           ...state.allRecipe.sort((a, b) => {
             if(action.payload)return a.spoonacularScore - b.spoonacularScore
             return b.spoonacularScore - a.spoonacularScore
          })],
      }
    case ORDER_BY_HEALTH_SCORE:
      return {
        ...state,
        allRecipe:[ 
           ...state.allRecipe.sort((a, b) => {
             if(action.payload)return a.healthScore - b.healthScore
             return b.healthScore - a.healthScore
          })],
      }
    case ORDER_BY_LIKES:
      return {
        ...state,
        allRecipe:[ 
           ...state.allRecipe.sort((a, b) => {
             if(action.payload)return a.aggregateLikes - b.aggregateLikes
             return b.aggregateLikes - a.aggregateLikes
          })],
      }
    case ORDER_BY_TIME_PREPARATION:
      return {
        ...state,
        allRecipe:[ 
           ...state.allRecipe.sort((a, b) => {
             if(action.payload)return a.readyInMinutes - b.readyInMinutes
             return b.readyInMinutes - a.readyInMinutes
          })],
      }
    default:
      return state;
  }
};

export default todos;
