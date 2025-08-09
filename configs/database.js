const mongoose = require("mongoose");

// ======== database connection ======== //
const db = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rushabhgadhiya9102:12345@cluster0.h12zeop.mongodb.net/books"
    )
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log(err.message));
};
module.exports = db();