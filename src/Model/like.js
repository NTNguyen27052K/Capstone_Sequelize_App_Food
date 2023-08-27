// DAO
//Mapping to table in database

import { Model, DataTypes } from "sequelize";
import sequelize from "./index.js";
class Like extends Model {}

Like.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    res_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    date_like: {
      type: DataTypes.DATE,
    },
    
  },
  {
    sequelize,
    modelName: "Like",
    tableName: "like",
    timestamps: false,
  }
);

export default Like;
