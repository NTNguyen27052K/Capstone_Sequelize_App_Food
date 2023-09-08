import sequelize from "../Model/index.js";
import initModels from "../Model/init-models.js";
import { Sequelize } from "sequelize";

const Op = Sequelize.Op;

const model = initModels(sequelize);

//! ----------- getUser -----------
const getUser = async (request, response) => {
  //SELECT * FROM user
  let data = await model.user.findAll();
  // let data = await User.findOne({where: {full_name: "John wick"}});
  // response send data to client/browser
  response.send(data);
};
//! ----------- getUserById -----------
const getUserById = async (request, response) => {
  let { id } = request.params;

  let data = await model.user.findOne({
    // where: { user_id: id },
    where: {
      user_id: {
        [Op.like]: `%${id}%`,
      },
    },
  });

  response.send(data);
};
//! ----------- createUser -----------
const createUser = async (request, response) => {
  try {
    let { user_id, full_name, email, pass_word, facebook_app_id } =
      request.body;

    let checkEmail = await model.user.findOne({
      //email: request.body.email => email: email => email
      where: {
        email,
      },
    });

    if (checkEmail) {
      response.status(400).send("Email đã tồn tại");
      return;
    }
    await model.user.create({
      user_id,
      full_name,
      email,
      pass_word,
      facebook_app_id,
    });
    response.send("Thêm người dùng thành công");
  } catch (exception) {
    response.status(500).send(exception.message);
  }
};
//! -----------updateUser -----------
const updateUser = async (request, response) => {
  let { id } = request.params;
  let { full_name, email, pass_word } = request.body;

  await model.user.update(
    { full_name, email, pass_word },
    {
      where: {
        user_id: id,
      },
    }
  );
  response.send("Cập nhật người dùng thành công");
};
//! ----------- deleteUser -----------
const deleteUser = async (request, response) => {
  //delete from user WHERE user_id
  await model.user.destroy();
};
//! ----------- getUserByName -----------
const getUserByName = async (request, response) => {
  let { name } = request.params;

  let data = await model.user.findAll({
    where: {
      full_name: {
        [Op.like]: `%${name}%`,
      },
    },
  });

  response.send(data);
};
export {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByName,
};
