const currencyData = require("../Data/currency.json");
const userData = require("../Data/users.json");


const getAllCurrencyData = (req,res)=>{
    res.send(currencyData.data)
}

const getCurrencyNameData = (req, res) => {
    const { name } = req.params;
    let value = currencyData.data.find((obj) => obj.id === name.toUpperCase());
    if (value) {
      res.json(value);
    } else {
      res.send("currency is not available").sendStatus(404);
    }
    
    
    
  };


  module.exports = {getCurrencyNameData,getAllCurrencyData};