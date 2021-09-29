// const { Recipe } = require("../models");
// const Recipe = require("../models/Recipe");
// const TypeOfDiet = require("../models/TypeOfDiet");

const { Recipe, TypeOfDiet } = require("../db");

const router = require("express").Router();
const axios = require("axios");

const getDataDB = async () => {
  try {
    const dataDB = await Recipe.findAll({
      include: {
        model: TypeOfDiet,
        atributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return dataDB;
  } catch (error) {
    console.log(error, "error en la db");
  }
};

const getDataAPI = async () => {
  try {
    const api = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.apiKey}&addRecipeInformation=true&number=100`
    );
    const data = api.data.results.map((e) => {
      return {
        title: e.title,
        id: e.id,
        vegetarian: e.vegetarian,
        glutenFree: e.glutenFree,
        dairyFree: e.dairyFree,
        veryHealthy: e.veryHealthy,
      };
    });
    return data;
  } catch (error) {
    console.log(error, "errrrrror");
  }
};

//desarrollador
// const getAllData = async () => {
//   const DBdata = await getDataDB();
//   return DBdata;
// };
const getAllData = async () => {
  const apiData = await getDataAPI();
  const DBdata = await getDataDB();
  const allData = apiData.concat(DBdata);
  return allData;
};

const searchByNameApi = async (name) => {
  // {YOUR_API_KEY}&addRecipeInformation=true&query=${nameQuery}&number=100
  try {
    const api = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.apiKey}&addRecipeInformation=true&titleMatch=${name}`
    );
    const data = api.data.results.map((e) => {
      return {
        title: e.title,
        id: e.id,
        vegetarian: e.vegetarian,
        glutenFree: e.glutenFree,
        dairyFree: e.dairyFree,
        veryHealthy: e.veryHealthy,
      };
    });
    return data;
  } catch (error) {
    console.log(error, "errrrrror");
  }
};
const searchByNameDB = async (name) => {
  await Recipe.findAll({
    where: { name: name },
  }); // terminar de armar la busqueda en la api
};
// https://api.spoonacular.com/recipes/complexSearch?apiKey=ade3e4d00939456cb63c10007d5bc40d&addRecipeInformation=true&query=pizza&number=100

router.get("/", async function (req, res) {
  const allData = await getAllData();
  const { name } = req.query;
  if (name) {
    /*sin usar el endpoint
    const recipesByName = allData.filter((e) =>
      e.name.toLowerCase().include(name.toLowerCase())
    );*/
    const recipesByNameApi = await searchByNameApi(name);
    const recipesByNameDB = await searchByNameDB(name);
    const allRecipesByName = recipesByNameApi.concat(recipesByNameDB);
    if (allRecipesByName.length > 0) return res.send(allRecipesByName);
    else res.send("There is no recipe whit the name provide");
  } else if (allData.length > 0) res.send(allData);
  else res.status(400).send("error no hay data");
});

//--------------------------------------------------

const getByIdApi = async (id) => {
  try {
    const apiGetById = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.apiKey}`
    );
    const { data } = apiGetById;
    const obj = {
      title: data.title,
      id: data.id,
      vegetarian: data.vegetarian,
      glutenFree: data.glutenFree,
      dairyFree: data.dairyFree,
      veryHealthy: data.veryHealthy,
    };
    return obj;
  } catch (error) {
    console.log(error.data, "algo mal");
  }
};
const getbyIdDB = async (id) => {
  try {
    const dataDB = await Recipe.findByPk(id, {
      include: {
        model: TypeOfDiet,
        atributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return dataDB;
  } catch (error) {
    console.log(error);
  }
};

router.get("/:idReceta", async (req, res) => {
  const { idReceta } = req.params;
  const dataByIdDB = await getbyIdDB(idReceta);
  if (!dataByIdDB) {
    const dataByIdApi = await getByIdApi(idReceta);
    if (dataByIdApi) res.send(dataByIdApi);
    else res.status(500).send("No data");
  } else res.send(dataByIdDB);
});

//--------------    - --  - - - - -   --  - - - - - - - - - -




module.exports = router;
