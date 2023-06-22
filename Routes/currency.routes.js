 const router = require('express').Router();
 const {
    getCurrencyNameData,
    getAllCurrencyData,
  } = require("../Controllers/currency.controller");

 // currency routes
router.get("/", getAllCurrencyData);
router.get("/:name", getCurrencyNameData);

module.exports = router;