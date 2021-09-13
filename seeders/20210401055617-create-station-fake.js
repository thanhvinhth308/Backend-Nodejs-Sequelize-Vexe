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
      "stations",
      [
        {
          name: "Bến xe Mỹ Đình",
          address: "20 Phạm Hùng, Mỹ Đình, Từ Liêm",
          province: "Hà Nội",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe Miền Tây",
          address: "395 Kinh Dương Vương, An Lạc, Bình Tân",
          province: "Hồ Chí Minh",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe Giáp Bát",
          address: "Km6 đường Giải Phóng, quận Hoàng Mai, Hà Nội",
          province: "Hà Nội",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe Nước Ngầm",
          address: "Số 01 Ngọc Hồi, Hoàng Liệt, Q Hoàng Mai",
          province: "Hà Nội",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe Gia Lâm",
          address: "Số 9 Ngô Gia Khảm, Q.Long Biên",
          province: "Hà Nội",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe trung tâm Đà Nẵng",
          address: "Số 201 Tôn Đức Thắng, P Hòa Minh, Q Liên Chiểu",
          province: "Đà Nẵng",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe Đức Linh",
          address: "Huyện Đức Linh",
          province: "Bình Thuận",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe Nước Mát",
          address: "Thôn Nước Mát, Xã Âu Lâu",
          province: "Yên Bái",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe liên tỉnh Đà Lạt",
          address: "Số 01 Tô Hiến Thành, Phường 3, TP.Đà Lạt",
          province: "Lâm Đồng",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe ngã tư Vũng Tàu",
          address: "Quốc lộ 1A - An Bình - TP. Biên Hòa",
          province: "Đồng Nai",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe Tam Quan",
          address: "Thị trấn Tam Quan, Huyện Hoài Nhơn",
          province: "Bình Định",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe Hoài Nhơn",
          address: "Huyện Hoài Nhơn",
          province: "Bình Định",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe Sông Hinh",
          address: "Khu phố 4 - thị trấn Hai Riêng - huyện Sông Hinh",
          province: "Phú Yên",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe Nam Tuy Hòa",
          address: "Số 507 Nguyễn Văn Linh - phường Phú Lâm - TP Tuy Hòa",
          province: "Phú Yên",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe huyện Sơn Hòa",
          address: "Khu phố Trung Hòa - thị trấn Củng Sơn - huyện Sơn Hòa",
          province: "Phú Yên",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe thị trấn Hai Riêng",
          address: "Thị trấn Hai Riêng - Huyện Sông Hinh",
          province: "Phú Yên",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến xe Miền Đông",
          address: "Số 292 Đinh Bộ Lĩnh, Phường 26, Q.Bình Thạnh",
          province: "Hồ Chí Minh",
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
    await queryInterface.bulkDelete("stations", null, {});
  },
};
