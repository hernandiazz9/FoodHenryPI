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
    // console.log(api);
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
const getAllData = async () => {
  const DBdata = await getDataDB();
  return DBdata;
};
// const getAllData = async () => {
//   const apiData = await getDataAPI();
//   const DBdata = await getDataDB();
//   const allData = apiData.concat(DBdata);
//   return allData;
// };

const searchByName = async (name) => {
  // {YOUR_API_KEY}&addRecipeInformation=true&query=${nameQuery}&number=100
  try {
    const api = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.apiKey}&addRecipeInformation=true&query=${name}`
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

router.get("/", async function (req, res) {
  const allData = await getAllData();
  const { name } = req.params;
  if (name) {
    const dataByName = await searchByName();
    if (dataByName) res.send(dataByName);
  } else if (allData.length > 0) {
    res.send(allData);
  } else res.status(400).send("error no hay data");
});

router.get("/:idReceta", async (req, res) => {});

module.exports = router;
