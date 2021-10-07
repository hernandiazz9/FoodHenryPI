// const { Recipe } = require("../models");
// const Recipe = require("../models/Recipe");
// const TypeOfDiet = require("../models/TypeOfDiet");

const { Recipe, TypeOfDiet } = require("../db");
const router = require("express").Router();
const axios = require("axios");

// const typeOfDiets = [
//   "Gluten Free",
//   "Ketogenic",
//   "Vegetarian",
//   "Lacto-Vegetarian",
//   "Ovo-Vegetarian",
//   "Vegan",
//   "Pescetarian",
//   "Paleo",
//   "Primal",
//   "Whole30",
// ];

// const addTypeOfDiets = () => {
//   try {
//     typeOfDiets.forEach(async (e) => {
//       await TypeOfDiet.findOrCreate({
//         where: { name: e },
//       });
//     });
//   } catch (error) {
//     console.log(error, "error type of diet");
//   }
// };
const getTypeOfDiets = async () => {
  const allDiets = await TypeOfDiet.findAll();
  // console.log(allDiets);
  return allDiets;
};
router.get("/", async (req, res) => {
  // addTypeOfDiets();
  const getAllDiets = await getTypeOfDiets();
  res.send(getAllDiets);
});

module.exports = router;
