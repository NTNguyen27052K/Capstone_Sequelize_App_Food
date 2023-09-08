import { where } from "sequelize";
import sequelize from "../Model/index.js";
import initModels from "../Model/init-models.js";
import { Sequelize } from "sequelize";

const model = initModels(sequelize);
const Op = Sequelize.Op;
const getLike = async (request, response) => {
  //SELECT * FROM user
  // let data = await model.like_res.findAll({
  //   include: ["user", "re"],
  // });
  let { resId } = request.params;
  // let findRes = await model.restaurant.findAll(
  //   {
  //     // where: { user_id: id },
  //     where: {
  //       res_id: {
  //         [Op.like]: `%${resId}%`,
  //       },
  //     },
  //   },
  //   {
  //     include: ["user_id_users"],
  //   }
  // );
  let data = await model.restaurant.findAll({
    include: ["user_id_users"],
  });
  response.send(data);
};

export { getLike };
