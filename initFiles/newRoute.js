// creating a http server
const express = require("express");

const app = express();
const port = 3001;

const currencyData = require("./Data/currency.json");

// listinging
app.listen(port, () => {
  console.log("Server Started On port No. ", port);
});

app.get("/cur/:value", (req, res) => {
    const {value} = req.params;
    console.log(value)
    // console.log(currencyData)
    const response = currencyData.data.find((data) => data.id === value.toUpperCase())
    console.log(response)
    res.send(response);
});
