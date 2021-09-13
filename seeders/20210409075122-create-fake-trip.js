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
      "trips",
      [
        {
          fromStation: 1,
          toStation: 2,
          startTime: "07:30",
          price: 200000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          thumbnail: "public/images/1.jpeg",
          brandName: "Vinh",
        },
        {
          fromStation: 2,
          toStation: 3,
          startTime: "07:30",
          price: 250000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          brandName: "Vinh",
          thumbnail: "public/images/2.jpeg",
        },
        {
          fromStation: 3,
          toStation: 4,
          startTime: "07:30",
          price: 300000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          thumbnail: "public/images/3.jpeg",
          brandName: "Vinh",
        },
        {
          fromStation: 5,
          toStation: 6,
          startTime: "07:30",
          price: 50000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          thumbnail: "public/images/4.jpeg",
          brandName: "Vinh",
        },
        {
          fromStation: 6,
          toStation: 7,
          startTime: "07:30",
          price: 100000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          thumbnail: "public/images/5.jpeg",
          brandName: "Vinh",
        },
        {
          fromStation: 7,
          toStation: 8,
          startTime: "07:30",
          price: 70000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          thumbnail: "public/images/6.jpeg",
          brandName: "Vinh",
        },
        {
          fromStation: 8,
          toStation: 9,
          startTime: "08:30",
          price: 90000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          thumbnail: "public/images/7.jpeg",
          brandName: "Trường",
        },
        {
          fromStation: 9,
          toStation: 10,
          startTime: "09:30",
          price: 260000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          thumbnail: "public/images/8.jpeg",
          brandName: "Trường",
        },
        {
          fromStation: 10,
          toStation: 11,
          startTime: "10:30",
          price: 220000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          thumbnail: "public/images/9.jpeg",
          brandName: "Trí",
        },
        {
          fromStation: 12,
          toStation: 13,
          startTime: "11:30",
          price: 170000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          thumbnail: "public/images/10.jpeg",
          brandName: "Thành Vinh",
        },
        {
          fromStation: 16,
          toStation: 17,
          startTime: "12:30",
          price: 170000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          thumbnail: "public/images/11.jpeg",
          brandName: "Vũ",
        },
        {
          fromStation: 1,
          toStation: 6,
          startTime: "13:30",
          price: 300000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          thumbnail: "public/images/12.jpeg",
          brandName: "Vũ",
        },
        {
          fromStation: 6,
          toStation: 8,
          startTime: "14:30",
          price: 400000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          thumbnail: "public/images/13.jpeg",
          brandName: "Vũ",
        },
        {
          fromStation: 10,
          toStation: 12,
          startTime: "15:30",
          price: 70000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          thumbnail: "public/images/14.jpeg",
          brandName: "Vũ",
        },
        {
          fromStation: 15,
          toStation: 17,
          startTime: "16:30",
          price: 130000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          thumbnail: "public/images/15.jpeg",
          brandName: "Trí",
        },
        {
          fromStation: 9,
          toStation: 12,
          startTime: "17:30",
          price: 180000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
          thumbnail: "public/images/16.jpeg",
          brandName: "Trí",
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
    await queryInterface.bulkDelete("trips", null, {});
  },
};
