import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// dotenv.config(); nếu nó ở ngoài cùng file thì ko cần
dotenv.config({ path: "./src/.env" });
import config from "../Config/config.js";

const { db_database, db_user, db_pass, db_host, db_port, db_dialect } = config;

const sequelize = new Sequelize(db_database, db_user, db_pass, {
  host: db_host,
  port: db_port,
  dialect: db_dialect,
});

export default sequelize;
// http://localhost:8080/api/like/get-like
