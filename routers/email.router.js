const express = require("express");
const { Seat, Trip } = require("../models");
const emailRouters = express.Router();
const nodemailer = require("nodemailer");
const sendMail1 = async (req, res) => {
  const { userId } = req.params;
  let priceTotal = 0;
  try {
    const seatsList = await Seat.findAll({
      where: {
        userId: userId,
      },
    });
    priceTotal = seatsList.reduce((total, currentValue) => {
      return currentValue.price + total;
    }, 0);
    // console.log("tong tien", priceTotal);
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vinhvutritruong@gmail.com", // generated ethereal user
        pass: "vinh123@", // generated ethereal password
      },
    });
    let info = await transporter.sendMail({
      from: "vinhvutritruong@gmail.com", // sender address
      to: "nguoinhantri@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?  casdasdasdadadasdad", // plain text body
      html: `<b>Hello world?${priceTotal}</b>`, // html body
    });
    res.send(info);
  } catch (error) {
    res.status(500).send(error);
  }
};

const sendMail = async (req, res) => {
  const { itemList, user, price } = req.body;
  let htmlContent = itemList.reduce((total, current) => {
    const html =
      total +
      `<tr><th style="border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;">${current.brandName}</th><th style="border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;">${current.price}</th><th style="border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;">${current.startTime}</th><tr/>`;
    return html;
  }, "");
  htmlContent =
    `<div style="font-size: 25px;font-weight: bold;color: blue;">Cảm ơn ${user.name}(SDT:${user.numberPhone}) đã đặt vé</div><table style="width: 100%;">
    <table style="width: 100%;">
    <th style="border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;">Hãng xe</th>
    <th style="border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;">Giá</th>
    <th style="border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;"> Giờ xuất phát</th>` +
    htmlContent +
    `</table><div style="font-size: 25px;font-weight: bold;color: blue;">Tổng tiền ${price} </div>`;
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vinhvutritruong@gmail.com", // generated ethereal user
      pass: "vinh123@", // generated ethereal password
    },
  });
  let info = await transporter.sendMail({
    from: "vinhvutritruong@gmail.com", // sender address
    to: user.email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?  ", // plain text body
    html: htmlContent, // html body
  });
  res.send(info);
};
emailRouters.post("/", sendMail);

module.exports = {
  emailRouters,
};
