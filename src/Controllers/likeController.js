
import { where } from 'sequelize';
import sequelize from '../Model/index.js';
import initModels from "../Model/init-models.js";

const model = initModels(sequelize);
const getLike = async (request, response) => {
  //SELECT * FROM user
  let data = await model.like_res.findAll({
  include:['user', 're']});
  
  response.send(data);
};

export { getLike };