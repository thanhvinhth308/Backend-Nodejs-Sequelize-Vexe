const checkExist = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    // kiểm tra xem station có tồn hay ko
    const station = await Model.findOne({
      where: {
        id,
      },
    });
    if (station) {
      next();
    } else {
      res.status(404).send(`khong tìm thấy station có id là ${id}`);
    }
  };
};

module.exports = {
  checkExist,
};
