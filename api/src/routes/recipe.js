// const { Recipe } = require("../models");
// const Recipe = require("../models/Recipe");
// const TypeOfDiet = require("../models/TypeOfDiet");

const { Recipe, TypeOfDiet } = require("../db");
const router = require("express").Router();

const recipeCreated = async (data) => {
  const {
    title,
    summary,
    spoonacularScore,
    healthScore,
    steps,
    ingredients,
    image,
    aggregateLikes,
    readyInMinutes,
    diets,
    createdInDb,
  } = data;
  try {
    if (!title || !summary) return;
    const created = await Recipe.create({
      title,
      summary,
      ingredients,
      spoonacularScore: parseInt(spoonacularScore)||0,
      healthScore: parseInt(healthScore) || 0,
      steps,
      image,
      likes: parseInt(aggregateLikes)||0,
      readyInMinutes: parseInt(readyInMinutes),
      createdInDb,
    });
    const typeOfDietsDB = await TypeOfDiet.findAll({
      where: { name: diets },
    });
    created.addTypeOfDiet(typeOfDietsDB);
    return true;
  } catch (error) {
    console.log(error);
  }
};

router.post("/", async (req, res) => {
  let infoBody = req.body;
  const created = await recipeCreated(infoBody);
  if (created) res.send("Recipe Created");
  else res.status(400).send("Name or Dish Sumary cant be empty");
});

module.exports = router;
