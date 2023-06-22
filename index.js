// creating a http server
require('dotenv').config();
const express = require("express");
const app = express();
const port = 3001;
const currencyRoutes = require("./Routes/currency.routes");
const usersRoutes = require("./Routes/users.routes");
const queryValidator = require("./validations/users.validator");



// listinging
app.listen(port, () => {
  console.log("Server Started On port No. ", port);
});
// default routes
app.get("/", (req, res) => {
  res.send("<h1>Your Are on home /</h2>");
});

app.use("/users",usersRoutes);
app.use("/cur",currencyRoutes);



