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
    // console.log('datadb',dataDB );

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
      const newDiets = [];
      if (e.vegan) e.diets.includes("vegan") ? null : newDiets.push("vegan");
      if (e.vegetarian)
        e.diets.includes("vegetarian") ? null : newDiets.push("vegetarian");
      if (e.glutenFree)
        e.diets.includes("gluten free") ? null : newDiets.push("gluten free");
      if (e.dairyFree)
        e.diets.includes("dairy free") ? null : newDiets.push("dairy free");
      return {
        vegetarian: e.vegetarian,
        vegan: e.vegan,
        glutenFree: e.glutenFree,
        dairyFree: e.dairyFree,
        title: e.title,
        id: e.id,
        summary: e.summary,
        spoonacularScore: e.spoonacularScore,
        healthScore: e.healthScore,
        steps: e.analyzedInstructions.map((e) => e.steps),
        image: e.image,
        cusines: e.cuisines,
        aggregateLikes: e.aggregateLikes,
        dishTypes: e.dishTypes,
        readyInMinutes: e.readyInMinutes,
        diets: e.diets.concat(newDiets),
        createdInDb: false,
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
  // console.log(DBdata, '////////-----------------');
  const allData = apiData.concat(DBdata);
  return allData;
};

const searchByNameApi = async (name) => {
  try {
    const api = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.apiKey}&addRecipeInformation=true&titleMatch=${name}`
    );
    const data = api.data.results.map((e) => {
      const newDiets = [];
      if (e.vegan) e.diets.includes("vegan") ? null : newDiets.push("vegan");
      if (e.vegetarian)
        e.diets.includes("vegetarian") ? null : newDiets.push("vegetarian");
      if (e.glutenFree)
        e.diets.includes("gluten free") ? null : newDiets.push("gluten free");
      if (e.dairyFree)
        e.diets.includes("dairy free") ? null : newDiets.push("dairy free");
      return {
        vegetarian: e.vegetarian,
        vegan: e.vegan,
        glutenFree: e.glutenFree,
        dairyFree: e.dairyFree,
        title: e.title,
        id: e.id,
        summary: e.summary,
        spoonacularScore: e.spoonacularScore,
        healthScore: e.healthScore,
        steps: e.analyzedInstructions.map((e) => e.steps),
        image: e.image,
        cusines: e.cuisines,
        aggregateLikes: e.aggregateLikes,
        dishTypes: e.dishTypes,
        readyInMinutes: e.readyInMinutes,
        diets: e.diets.concat(newDiets),
        createdInDb: false,
      };
    });
    return data;
  } catch (error) {
    console.log(error, "errrrrror");
  }
};
const searchByNameDB = async (name) => {
  const dataDBByName = await Recipe.findAll({
    where: { title: name },
  });
  return dataDBByName;
};
// https://api.spoonacular.com/recipes/complexSearch?apiKey=ade3e4d00939456cb63c10007d5bc40d&addRecipeInformation=true&query=pizza&number=100

router.get("/", async function (req, res) {
  const { name } = req.query;
  if (name) {
    /*sin usar el endpoint
    const recipesByName = allData.filter((e) =>
      e.name.toLowerCase().include(name.toLowerCase())
    );*/
    const recipesByNameApi = await searchByNameApi(name);
    const recipesByNameDB = await searchByNameDB(name);
    // console.log(recipesByNameDB, "/a/s/da/sd/as/d");
    const allRecipesByName = recipesByNameApi.concat(recipesByNameDB);
    if (allRecipesByName.length > 0) return res.send(allRecipesByName);
    else res.send("There is no recipe whit the name provide");
  } else {
    const allData = await getAllData();
    if (allData.length > 0) res.send(allData);
    else res.status(400).send("error no hay data");
  }
});

//--------------------------------------------------

const getByIdApi = async (id) => {
  try {
    const apiGetById = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.apiKey}`
    );
    const e = apiGetById.data;
    const newDiets = [];
    if (e.vegan) e.diets.includes("vegan") ? null : newDiets.push("vegan");
    if (e.vegetarian)
      e.diets.includes("vegetarian") ? null : newDiets.push("vegetarian");
    if (e.glutenFree)
      e.diets.includes("gluten free") ? null : newDiets.push("gluten free");
    if (e.dairyFree)
      e.diets.includes("dairy free") ? null : newDiets.push("dairy free");
    const obj = {
      vegetarian: e.vegetarian,
      vegan: e.vegan,
      glutenFree: e.glutenFree,
      dairyFree: e.dairyFree,
      title: e.title,
      id: e.id,
      summary: e.summary,
      spoonacularScore: e.spoonacularScore,
      healthScore: e.healthScore,
      steps: e.analyzedInstructions.map((e) => e.steps),
      image: e.image,
      cusines: e.cuisines,
      aggregateLikes: e.aggregateLikes,
      dishTypes: e.dishTypes,
      readyInMinutes: e.readyInMinutes,
      diets: e.diets.concat(newDiets),
      createdInDb: false,
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
  console.log(idReceta,'idddddd////');
  const dataByIdDB = await getbyIdDB(idReceta);
  if (!dataByIdDB) {
    const dataByIdApi = await getByIdApi(idReceta);
    if (dataByIdApi) res.send(dataByIdApi);
    else res.status(500).send("No data");
  } else res.send(dataByIdDB);
});

//--------------    - --  - - - - -   --  - - - - - - - - - -

module.exports = router;
