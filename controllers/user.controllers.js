const { User, sequelize } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatarUrl = require("gravatar-url");
const register = async (req, res) => {
  const { name, email, password, numberPhone } = req.body;
  try {
    // tạo avatar mặc định
    const avatarUrl = gravatarUrl(email);
    // tạo ra một chuỗi ngẫu nhiên
    const salt = bcrypt.genSaltSync(10);
    // mã hóa salt + password
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      numberPhone,
      avatar: avatarUrl,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  // b1 : tìm ra user đang đăng nhập dựa trên trên email
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    // b2 : kiểm mật khẩu có đúng hay không

    const isAuth = bcrypt.compareSync(password, user.password);
    if (isAuth) {
      const token = jwt.sign(
        { email: user.email, type: user.type },
        "tuong-tinh-2350",
        { expiresIn: 60 * 60 }
      );
      res.status(200).send({ message: "Đăng Nhập Thành Công ! ", token, user });
    } else {
      res.status(500).send({ message: "Tài khoãng hoặc mật khẩu không đúng" });
    }
  } else {
    res.status(404).send({ message: "Không tìm thấy email phù hợp" });
  }
};

const uploadAvatar = async (req, res) => {
  const { file, body } = req;
  // console.log("hahahahah", JSON.parse(req.body.tripData));

  // console.log("body", req);
  // const urlImage = `http://localhost:3000/${file.path}`;
  // const { user } = req;
  // const userFound = await User.findOne({
  //   email: user.email,
  // });
  // userFound.avatar = urlImage;
  // await userFound.save();
  res.send("truong");
};

const getAllTrip = async (req, res) => {
  try {
    const [results] = await sequelize.query(
      `select users.name as userName , fromSta.name as fromStation , toSta.name as toStation
      from users
      inner join tickets on users.id = tickets.userId
      inner join trips on trips.id = tickets.tripId
      inner join stations as fromSta on fromSta.id = trips.fromStation
      inner join stations as toSta on toSta.id = trips.toStation;`
    );
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  register,
  login,
  uploadAvatar,
  getAllTrip,
};
