const express = require("express");
const path = require("path");
const { sequelize } = require("./models");
const { rootRouter } = require("./routers");
const Fingerprint = require("express-fingerprint");

const app = express();

//cài đặt Fingerprint
app.use(Fingerprint());

// cài ứng dụng sử dụng kiểu json
app.use(express.json());

// cài static file
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDirectory));

// dùng router
app.use(rootRouter);
var cors = require("cors");

app.use(cors());

const sendMail = async (req, res) => {
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
    html: "<b>Hello world?dasdasdadad</b>", // html body
  });
  res.send(info);
};

app.get("/email", sendMail);

// lắng nghe sự kiện kết nối
app.listen(7000, async () => {
  console.log("App listening on http://localhost:7000");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
