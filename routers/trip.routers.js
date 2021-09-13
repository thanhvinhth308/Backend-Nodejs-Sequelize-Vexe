const express = require("express");
const {
  createTrip,
  getAllTrip,
  deleteTrip,
  updateTrip,
  getFilteredTrip,
  getTripBySearch,
} = require("../controllers/trip.controllers");
const { uploadAvatar } = require("../controllers/user.controllers");
const { uploadImage } = require("../middlewares/upload/upload-image");
const tripRouters = express.Router();

// tripRouters.post("/", uploadImage("user"), createTrip);
tripRouters.post("/", uploadImage("anh"), createTrip);
tripRouters.post("/search", getTripBySearch);
// tripRouters.get("/", getAllTrip);
tripRouters.get("/", getFilteredTrip);
tripRouters.delete("/:id", deleteTrip);
tripRouters.put("/:id", updateTrip);
module.exports = {
  tripRouters,
};
