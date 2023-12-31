import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class user extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        user_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        full_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: true,
          validate: {
            isEmail: {
              // args: true,
              msg: "Email không hợp lệ",
            },
          },
        },
        pass_word: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        facebook_app_id: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "user",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "user_id" }],
          },
        ],
      }
    );
  }
}
