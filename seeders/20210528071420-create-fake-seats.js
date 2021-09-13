"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "seats",
      [
        {
          tripId: 1,
          userId: 0,
          isBooked: 0,
          code: "A01",
          price: 200000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 1,
          userId: 0,
          code: "A02",
          isBooked: 0,
          price: 200000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 1,
          userId: 0,
          code: "A03",
          isBooked: 0,
          price: 200000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 1,
          userId: 0,
          code: "A04",
          isBooked: 0,
          price: 200000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 1,
          userId: 0,
          code: "A05",
          isBooked: 0,
          price: 200000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 1,
          userId: 0,
          code: "A06",
          isBooked: 0,
          price: 200000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 1,
          userId: 0,
          code: "A07",
          isBooked: 0,
          price: 200000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 1,
          userId: 0,
          code: "A08",
          isBooked: 0,
          price: 200000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 2,
          userId: 0,
          code: "B01",
          isBooked: 0,
          price: 250000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 2,
          userId: 0,
          code: "B02",
          isBooked: 0,
          price: 250000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 2,
          userId: 0,
          code: "B03",
          isBooked: 0,
          price: 250000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 2,
          userId: 0,
          code: "B04",
          isBooked: 0,
          price: 250000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 2,
          userId: 0,
          code: "B05",
          isBooked: 0,
          price: 250000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 3,
          userId: 0,
          code: "C01",
          isBooked: 0,
          price: 300000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 3,
          userId: 0,
          code: "C02",
          isBooked: 0,
          price: 300000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 3,
          userId: 0,
          code: "C03",
          isBooked: 0,
          price: 300000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 3,
          userId: 0,
          code: "C04",
          isBooked: 0,
          price: 300000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 3,
          userId: 0,
          code: "C05",
          isBooked: 0,
          price: 300000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 3,
          userId: 0,
          code: "C06",
          isBooked: 0,
          price: 300000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 3,
          userId: 0,
          code: "C07",
          isBooked: 0,
          price: 300000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          tripId: 3,
          userId: 0,
          code: "C08",
          isBooked: 0,
          price: 300000,
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("seats", null, {});
  },
};
