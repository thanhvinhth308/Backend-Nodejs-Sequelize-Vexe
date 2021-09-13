const express = require("express");
const {
  createTicket,
  getTicketByUserId,
} = require("../controllers/ticket.controllers");
const tickerRouters = express.Router();

tickerRouters.post("/userId", getTicketByUserId);
tickerRouters.post("/", createTicket);
module.exports = {
  tickerRouters,
};
