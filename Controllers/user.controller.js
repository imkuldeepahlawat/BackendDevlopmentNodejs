const currencyData = require("../Data/currency.json");
const userData = require("../Data/users.json");


const getUser =(req,res) =>{
    console.log("getUser Called");
    res.send(userData.data)
}
const getUserUuid = (req,res) =>{
    console.log("getUserUuid Called");
    const {uuid} = req.params;
    console.log(uuid);
    if(uuid){
        const value = userData.data.find((obj) => obj.login.uuid === uuid);

        if(value){
            console.log(value);
            res.status(202).send(value)

        }else{

            res.status(404).json("UUID not found");
        }
    }else{

        res.status(404).send("UUID not found");
    }
}
const searchUser =(req,res) =>{
    console.log("searchUser Called");
    res.send(userData)
}

module.exports = {getUser,getUserUuid,searchUser};