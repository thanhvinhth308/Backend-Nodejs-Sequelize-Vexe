const { Trip, Station, sequelize } = require("../models");
const { Op } = require("sequelize");
const createTrip = async (req, res) => {
  const { fromStation, toStation, startTime, price, brandName } = JSON.parse(
    req.body.tripData
  );
  const newTrip = await Trip.create({
    fromStation,
    toStation,
    startTime,
    price,
    brandName,
  });
  console.log(newTrip.id);
  await Trip.update(
    { thumbnail: `${req.file.path}` },
    {
      where: {
        id: newTrip.id,
      },
    }
  );
  res.status(201).send(newTrip);
};

const getAllTrip = async (req, res) => {
  const tripList = await Trip.findAll({
    include: [
      {
        model: Station,
        as: "from",
      },
      {
        model: Station,
        as: "to",
      },
    ],
  });
  res.status(200).send(tripList);
};
const getTripBySearch = async (req, res) => {
  const { brandName } = req.body;
  // try {
  //   if (brandName) {
  //     const tripList = await Trip.findAll({
  //       where: {
  //         brandName: {
  //           [Op.like]: `%${brandName}%`,
  //         },
  //       },
  //     });
  //     res.status(200).send(tripList);
  //   } else {
  //     res.status(404).send("Not found");
  //   }
  // } catch (error) {
  //   res.status(500).send(error);
  // }
  const searchQuery = `SELECT *,trips.startTime as time,trips.id as tripId,fromSta.name as fromName,fromSta.province as fromProvince,toSta.name as toName,toSta.province as toProvince 
  FROM trips
  inner join stations as fromSta on fromSta.id = trips.fromStation
  inner join stations as toSta on toSta.id = trips.toStation
   where Trips.brandName LIKE "%${brandName}%";`;
  const [results] = await sequelize.query(searchQuery);
  res.status(200).send(results);
};

const deleteTrip = async (req, res) => {
  const { id } = req.params;
  await Trip.destroy({
    where: {
      id,
    },
  });
  res.send(` đã xóa trip có id là  : ${id} `);
};

const updateTrip = async (req, res) => {
  const { id } = req.params;
  const { fromStation, toStation, startTime, price, brandName } = req.body;
  await Trip.update(
    { fromStation, toStation, startTime, price, brandName },
    {
      where: {
        id,
      },
    }
  );
  res.send(` đã update thành công trip có id là : ${id} `);
};
// const getFilteredTrip=async(req,res)=>{
//   const {_sort}=req.query;
//   try {
//     const [results] = await sequelize.query(
//       `SELECT * FROM trips
//       ORDER BY price ${_sort}; `
//     );
//     res.send(results);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// }
const getFilteredTrip = async (req, res) => {
  const { price_lte, price_gte, _sort, _province, _toProvince } = req.query;
  let searchQuery = `SELECT *,DATE_FORMAT(trips.startTime, "%H:%i") as time,trips.id as tripId,fromSta.name as fromName,fromSta.province as fromProvince,toSta.name as toName,toSta.province as toProvince 
  FROM trips
  inner join stations as fromSta on fromSta.id = trips.fromStation
  inner join stations as toSta on toSta.id = trips.toStation`;
  if (Boolean(price_gte) && Boolean(price_lte)) {
    searchQuery =
      searchQuery + ` where price<=${price_lte} and price>=${price_gte}`;
  }
  if (Boolean(_province)) {
    if (Boolean(price_gte) && Boolean(price_lte)) {
      searchQuery = searchQuery + ` and fromSta.province='${_province}'`;
    } else {
      searchQuery = searchQuery + ` where fromSta.province='${_province}' `;
    }
  }
  if (Boolean(_toProvince)) {
    if (Boolean(price_gte) && Boolean(price_lte)) {
      searchQuery = searchQuery + ` and toSta.province='${_toProvince}'`;
    } else {
      if (Boolean(_province)) {
        searchQuery = searchQuery + ` and toSta.province='${_toProvince}' `;
      } else {
        searchQuery = searchQuery + ` where toSta.province='${_toProvince}' `;
      }
    }
  }
  if (Boolean(_sort)) {
    searchQuery = searchQuery + ` ORDER BY price ${_sort}`;
  }
  searchQuery = searchQuery + ";";
  try {
    const [results] = await sequelize.query(searchQuery);
    res.send(results);
    return;
  } catch (error) {
    res.status(500).send(error);
  }
  // if (Boolean(_sort) && Boolean(price_gte) && Boolean(price_lte)) {
  //   try {
  //     const [results] = await sequelize.query(
  //       `SELECT *,fromSta.name as fromName,toSta.name as toName FROM trips
  //       inner join stations as fromSta on fromSta.id = trips.fromStation
  //       inner join stations as toSta on toSta.id = trips.toStation
  //       where price>=${price_lte} and price<=${price_gte}
  //       ORDER BY price ${_sort};`
  //     );
  //     res.send(results);
  //     return;
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  // }
  // if (_sort) {
  //   try {
  //     const [results] = await sequelize.query(
  //       `SELECT *,fromSta.name as fromName,toSta.name as toName FROM trips
  //       inner join stations as fromSta on fromSta.id = trips.fromStation
  //       inner join stations as toSta on toSta.id = trips.toStation
  //       ORDER BY price ${_sort}; `
  //     );
  //     res.send(results);
  //     return;
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  // }
  // if (Boolean(price_gte) && Boolean(price_lte)) {
  //   try {
  //     const [results] = await sequelize.query(
  //       ` SELECT *,fromSta.name as fromName,toSta.name as toName FROM trips
  //    inner join stations as fromSta on fromSta.id = trips.fromStation
  //    inner join stations as toSta on toSta.id = trips.toStation
  //     where price>=${price_lte} and price<=${price_gte} ; `
  //     );
  //     res.send(results);
  //     return;
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  // }
};
module.exports = {
  createTrip,
  getAllTrip,
  deleteTrip,
  updateTrip,
  getFilteredTrip,
  getTripBySearch,
};
