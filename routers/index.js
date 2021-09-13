const express = require("express");
const { stationRouter } = require("./station.routers");
const { userRouter } = require("./user.routers");
const { tripRouters } = require("./trip.routers");
const { fingerPrintRouter } = require("./test-finger-print");
const { seatRouters } = require("./seat.routers");
const { emailRouters } = require("./email.router");
const { tickerRouters } = require("./ticket");
const { vnpayRouters } = require("./vnpay.router");
const rootRouter = express.Router();

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/trips", tripRouters);
rootRouter.use("/test-finger-print", fingerPrintRouter);
rootRouter.use("/seats", seatRouters);
rootRouter.use("/email", emailRouters);
rootRouter.use("/ticket", tickerRouters);
rootRouter.use("/vnpay", vnpayRouters);
module.exports = {
  rootRouter,
};
