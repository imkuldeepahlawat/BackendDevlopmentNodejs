// creating a http server
const express = require("express");

const app = express();
const port = 3001;

const currencyData = require("./Data/currency.json");

// listinging
app.listen(port, () => {
  console.log("Server Started On port No. ", port);
});

app.get("/cur", (req, res) => {
    res.send(currencyData);
});
