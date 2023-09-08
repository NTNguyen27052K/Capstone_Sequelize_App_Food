import { where } from "sequelize";
import sequelize from "../Model/index.js";
import initModels from "../Model/init-models.js";
import { Sequelize } from "sequelize";

const model = initModels(sequelize);
const Op = Sequelize.Op;
const getRateRes = async (request, response) => {
  let data = await model.user.findAll({
    include: ["res_id_restaurant_rate_res"],
  });
  response.send(data);
};

export { getRateRes };
