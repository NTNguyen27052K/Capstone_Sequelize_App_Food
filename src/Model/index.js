import { Sequelize } from "sequelize";
import initMomdels from '../Model/init-models.js';

const sequelize = new Sequelize("db_food", "root", "1234", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
});

export default sequelize;
// http://localhost:8080/api/like/get-like