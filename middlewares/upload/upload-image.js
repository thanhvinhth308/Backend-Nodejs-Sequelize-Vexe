const mkdirp = require("mkdirp");
const multer = require("multer");

const uploadImage = (type) => {
  const made = mkdirp.sync(`./public/images/${type}`);
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/user`); // setup chổ cần lưu file , ./ là tính từ server
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname); // đặt lại tên cho file
    },
  });
  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      console.log("asdsadasdad", req.file);
      // console.log("hahahahah", JSON.parse(req.body));
      const extensionImageList = [".png", ".jpg"];
      const extension = file.originalname.slice(-4);
      const check = extensionImageList.includes(extension);
      if (check) {
        cb(null, true);
      } else {
        cb(new Error("extension không hợp lệ"));
      }
    },
  });

  return upload.single("anh");
};

module.exports = {
  uploadImage,
};
