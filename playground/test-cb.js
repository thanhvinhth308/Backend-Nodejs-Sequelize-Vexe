function callBackFunction(errors, value) {
  if (errors) {
    console.log(errors);
    return new Error(errors);
  }

  // xử lý value
  console.log(value);
  return value;
}

callBackFunction({ message: "thiếu từ khóa" }, "./public");
