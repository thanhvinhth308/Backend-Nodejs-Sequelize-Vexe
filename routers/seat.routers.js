const express = require("express");
const { getAllSeat, getSeatById, getSeatByTripId, updateSeat, getSeatByUserId, createSeats} = require("../controllers/seat.controllers");
const seatRouters = express.Router();

seatRouters.get("/:id",getSeatById );
seatRouters.get("/trip/:id",getSeatByTripId );
seatRouters.get("/user/:id",getSeatByUserId );
seatRouters.put("/:id", updateSeat);
seatRouters.post("/", createSeats);
module.exports = {
    seatRouters,
};
