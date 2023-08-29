
import sequelize from '../Model/index.js';
import initModels from "../Model/init-models.js";

const model = initModels(sequelize);
const getUser = async (request, response) => {
  //SELECT * FROM user
  let data = await model.user.findAll();
  // let data = await User.findOne({where: {full_name: "John wick"}});
  // response send data to client
  response.send(data);
};

export { getUser };
