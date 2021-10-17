import clienteAxios from "../config/axios";
import {
  GET_RECIPES,
  GET_RECIPES_OKEY,
  GET_RECIPES_ERROR,
  SEARCH_RECIPES,
  SEARCH_RECIPES_OKEY,
  SEARCH_RECIPES_ERROR,
  FILTER_RECIPES,
  FILTER_RECIPES_RESET,
  GET_FILTER,
  GET_FILTER_OKEY,
  GET_FILTER_ERROR,
  ORDER_BY_NAME,
  ORDER_BY_SCORE,
  ORDER_BY_HEALTH_SCORE,
  ORDER_BY_LIKES,
  ORDER_BY_TIME_PREPARATION,
  GET_BY_ID_ERROR,
  GET_BY_ID_OKEY,
  GET_BY_ID,
  RESET_ERROR,
  BY_ORIGIN,
  BY_API
} from "../types";

export const getRecipeAction = () => {
  return async (dispatch) => {
    dispatch(getRecipes());
    try {
      const recipes = await clienteAxios.get(`/recipes`);
      // console.log(recipes.data, 'dataaa');
      dispatch(getRecipesOKEY(recipes.data));
    } catch (error) {
      dispatch(getRecipesError(error.data));
    }
  };
};
const getRecipes = () => ({
  type: GET_RECIPES,
  payload: true,
});
const getRecipesOKEY = (recipes) => ({
  type: GET_RECIPES_OKEY,
  payload: recipes,
});
const getRecipesError = (error) => ({
  type: GET_RECIPES_ERROR,
  payload: error,
});

export const searchRecipeAction = (name) => {
  //  console.log('otro',name);
  return async (dispatch) => {
    dispatch(searchRecipes());
    try {
      const recipesName = await clienteAxios.get(`/recipes?name=${name}`);
      // console.log(recipesName.data);
      dispatch(searchRecipesOKEY(recipesName.data));
    } catch (error) {
      dispatch(searchRecipesError(error.data));
    }
  };
};
const searchRecipes = () => ({
  type: SEARCH_RECIPES,
  payload: true,
});
const searchRecipesOKEY = (recipes) => {
  if (typeof recipes === "string") {
    return {
      type: SEARCH_RECIPES_ERROR,
      payload: recipes,
    };
  }
  return {
    type: SEARCH_RECIPES_OKEY,
    payload: recipes,
  };
};
const searchRecipesError = (error) => ({
  type: SEARCH_RECIPES_ERROR,
  payload: error,
});

export const getFiltersAction = () => {
  return async (dispatch) => {
    dispatch(getFilter());
    try {
      const types = await clienteAxios.get(`/types`);
      // console.log(types.data);
      dispatch(getFilterOKEY(types.data));
    } catch (error) {
      dispatch(getFilterError(error.data));
    }
  };
};

const getFilter = () => ({
  type: GET_FILTER,
  payload: true,
});
const getFilterOKEY = (types) => ({
  type: GET_FILTER_OKEY,
  payload: types,
});
const getFilterError = (error) => ({
  type: GET_FILTER_ERROR,
  payload: error,
});

export const filterRecipeAction = (filter) => {
  return {
    type: FILTER_RECIPES,
    payload: filter,
  };
};

export const filterReset = () => {
  return {
    type: FILTER_RECIPES_RESET,
  };
};

export const orderByNameAction = (order) => {
  return {
    type: ORDER_BY_NAME,
    payload: order,
  };
};
export const orderByScoreAction = (order) => {
  return {
    type: ORDER_BY_SCORE,
    payload: order,
  };
};
export const orderByHealthScoreAction = (order) => {
  return {
    type: ORDER_BY_HEALTH_SCORE,
    payload: order,
  };
};
export const orderByLikesAction = (order) => {
  return {
    type: ORDER_BY_LIKES,
    payload: order,
  };
};
export const orderByTimePreparationAction = (order) => {
  return {
    type: ORDER_BY_TIME_PREPARATION,
    payload: order,
  };
};

export const createRecipeAction = (data) => {
  return async (dispatch) => {
    try {
      const post = await clienteAxios.post(`/recipe`, data);
      console.log(post, "createdd????");
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRecipeByIdAction = (id) => {
  return async (dispatch) => {
    dispatch(getRecipeById());
    try {
      const recipes = await clienteAxios.get(`/recipes/${id}`);
      // console.log(recipes.data, 'dataaa');
      dispatch(getRecipeByIdOKEY(recipes.data));
    } catch (error) {
      dispatch(getRecipeByIdError(error.data));
    }
  };
};
const getRecipeById = () => ({
  type: GET_BY_ID,
  payload: true,
});
const getRecipeByIdOKEY = (recipes) => ({
  type: GET_BY_ID_OKEY,
  payload: recipes,
});
const getRecipeByIdError = (error) => ({
  type: GET_BY_ID_ERROR,
  payload: error,
});


 export const resetErrorAction = () => ({
   type: RESET_ERROR
 })


 export const filterByOirigin = (order) =>({
  type: BY_ORIGIN,
  payload:order
 })
 export const filterByApi = (order) =>({
  type: BY_API,
  payload:order
 })