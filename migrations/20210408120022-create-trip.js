"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Trips", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fromStation: {
        type: Sequelize.INTEGER,
        references: {
          model: "stations",
          key: "id",
        },
      },
      toStation: {
        type: Sequelize.INTEGER,
        references: {
          model: "stations",
          key: "id",
        },
      },
      startTime: {
        type: Sequelize.STRING,
      },
      brandName: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      thumbnail:{
        type: Sequelize.STRING,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Trips");
  },
};
