const express = require("express");
const {
  register,
  login,
  uploadAvatar,
  getAllTrip,
} = require("../controllers/user.controllers");
const { authenticate } = require("../middlewares/auth/authenticate");
const { uploadImage } = require("../middlewares/upload/upload-image");
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/all-trip", getAllTrip);
// upload file
// userRouter.post("/upload-avatar", authenticate, uploadImage("user"), uploadAvatar);
userRouter.post("/upload-avatar", uploadImage("anh"), uploadAvatar);

module.exports = {
  userRouter,
};
