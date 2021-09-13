const { Seat, sequelize } = require("../models");

const createSeats = async (req, res) => {
  const { tripId, quantity, price } = req.body;
  let data = [];
  try {
    for (let i = 1; i <= quantity; i++) {
      const addedSeat = await Seat.create({
        tripId,
        isBooked: 0,
        userId: 0,
        code: `A${i}`,
        price,
      });
      data.push(addedSeat);
    }
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllSeat = async (req, res) => {
  // const {} = req.query;
  let searchQuery = `
  SELECT Seats.id,Seats.code,isBooked,DATE_FORMAT(trips.startTime, "%H:%i")as time,trips.price FROM trips
  inner join Seats  on Seats.tripId = trips.id;`;
  try {
    const [results] = await sequelize.query(searchQuery);
    res.send(results);
    return;
  } catch (error) {
    res.status(500).send(error);
  }
};
const getSeatById = async (req, res) => {
  const { id } = req.params;
  let searchQuery = `
  SELECT  Seats.id,Seats.code,trips.brandName,trips.startTime,trips.price FROM trips
  inner join Seats  on Seats.tripId = trips.id
  inner join stations as fromSta on fromSta.id = trips.fromStation
  inner join stations as toSta on toSta.id = trips.toStation
  where Seats.id=${id};
`;
  try {
    const [results] = await sequelize.query(searchQuery);
    res.send(results);
    return;
  } catch (error) {
    res.status(500).send(error);
  }
};
const getSeatByTripId = async (req, res) => {
  const { id } = req.params;
  let searchQuery = `
  SELECT  Seats.id,Seats.code,isBooked,trips.startTime,trips.price FROM trips
  inner join Seats  on Seats.tripId = trips.id
  inner join stations as fromSta on fromSta.id = trips.fromStation
  inner join stations as toSta on toSta.id = trips.toStation
  where Seats.tripId=${id};
`;
  try {
    const [results] = await sequelize.query(searchQuery);
    res.send(results);
    return;
  } catch (error) {
    res.status(500).send(error);
  }
};
const getSeatByUserId = async (req, res) => {
  const { id } = req.params;
  let searchQuery = `
  SELECT  Seats.id,Seats.code,isBooked,trips.brandName,trips.startTime,trips.price FROM trips
inner join Seats  on Seats.tripId = trips.id
inner join stations as fromSta on fromSta.id = trips.fromStation
inner join stations as toSta on toSta.id = trips.toStation
where Seats.userId=${id};
`;
  try {
    const [results] = await sequelize.query(searchQuery);
    res.send(results);
    return;
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateSeat = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const detailSeat = await Seat.findOne({
      where: {
        id,
      },
    });
    console.log("hahahahahah", detailSeat.isBooked);
    if (detailSeat.isBooked == 1) {
      detailSeat.isBooked = 0;
    } else {
      detailSeat.isBooked = 1;
    }
    detailSeat.userId = userId;
    await detailSeat.save();
    res.status(200).send(detailSeat);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllSeat,
  getSeatById,
  getSeatByTripId,
  updateSeat,
  getSeatByUserId,
  createSeats,
  // updateStation,
};
