"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Trip }) {
      // define association here
      this.belongsTo(User, { foreignKey: "userId" });
    }
  }
  Ticket.init(
    { price: DataTypes.FLOAT },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};
