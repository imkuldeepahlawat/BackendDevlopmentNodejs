// creating a http server
const express = require("express");

const app = express();
const port = 3001;
const currencyData = require("./Data/currency.json");
const {
  getCurrencyNameData,
  getAllCurrencyData,
} = require("./Controllers/currency.controller");
const {
  getUser,
  getUserUuid,
  searchUser,
} = require("./Controllers/user.controller");

// listinging
app.listen(port, () => {
  console.log("Server Started On port No. ", port);
});

app.get("/", (req, res) => {
  res.send("<h1>Your Are on home /</h2>");
});

app.get("/users", getUser);
app.get("/users/search", searchUser);
app.get("/users/:uuid", getUserUuid);

app.get("/cur/", getAllCurrencyData);
app.get("/cur/:name", getCurrencyNameData);
