const mongoose = require("mongoose");
require("dotenv").config();
const dbUri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

mongoose
  .connect(dbUri + dbName)
  .then(() => {
    console.log("Database is connected 🟢");
  })
  .catch((err) => {
    console.log("Database is not connected 🔴");
  });
