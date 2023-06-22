const currencyData = require("../Data/currency.json");
const userData = require("../Data/users.json");
const { getSearchValidator } = require("../validations/users.validator");
const {verifyAuth} = require("../utils");

const getUser = (req, res) => {
  console.log("getUser Called");
  verifyAuth(req,res);
  
  res.send(userData.data);

};
const getUserUuid = (req, res) => {
  console.log("getUserUuid Called");
  const { uuid } = req.params;
  console.log(uuid);
  if (uuid) {
    const value = userData.data.find((obj) => obj.login.uuid === uuid);

    if (value) {
      console.log(value);
      res.status(202).send(value);
    } else {
      res.status(404).json("UUID not found");
    }
  } else {
    res.status(404).send("UUID not found");
  }
};
const searchUser = (req, res) => {
  const { age, gender } = req.query;

  if (!age && !gender) {
    throw new Error("age or gender is missing");
  }

  if (age) {
    if (!Number(age)) {
      res.status(422).send("age must be a number");
    }
    if (age < 0 || age > 100) {
      res.status(422).send("looks like you are mortal");
    }
  }
  console.log("searchUser Called");
  res.status(200).send("search found");
};

const searchQuery = (req, res) => {
  try {
    const gender = req.query.gender;
    const age = req.query.age;
    console.log(age, gender);
    const error = getSearchValidator({ gender, age });
    if (error) {
        throw new Error();
    } else {
      res.status(200).send("ok");
    }
  } catch (error) {
    res.status(422).json(error);
  }
};

module.exports = { getUser, getUserUuid, searchUser, searchQuery };
