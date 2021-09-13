const { Ticket } = require("../models");
const createTicket = async (req, res) => {
  const { id, price } = req.body;
  try {
    const newTicket = await Ticket.create({ userId: id, price });
    res.status(201).send(newTicket);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getTicketByUserId = async (req, res) => {
  const { id } = req.body;
  try {
    const newTicket = await Ticket.findAll({ where: { userId: id } });
    res.status(201).send(newTicket);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  createTicket,
  getTicketByUserId,
};
