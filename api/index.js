//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console\

    const { TypeOfDiet } = require("./src/db");
    const typeOfDiets = [
      "gluten free",
      "ketogenic",
      "vegetarian",
      "lacto ovo vegetarian",
      "vegan",
      "pescatarian",
      "paleolithic",
      "primal",
      "whole 30",
    ];

    const addTypeOfDiets = () => {
      try {
        typeOfDiets.forEach(async (e) => {
          await TypeOfDiet.findOrCreate({
            where: { name: e },
          });
        });
      } catch (error) {
        console.log(error, "error type of diet");
      }
    };
    addTypeOfDiets();
  });
});
