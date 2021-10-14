
const { TypeOfDiet } = require("../db");
const router = require("express").Router();



const getTypeOfDiets = async () => {
  const allDiets = await TypeOfDiet.findAll();
  return allDiets;
};
router.get("/", async (req, res) => {
  const getAllDiets = await getTypeOfDiets();
  res.send(getAllDiets);
});

module.exports = router;
