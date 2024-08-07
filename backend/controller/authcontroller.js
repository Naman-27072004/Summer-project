const usermodel = require("../models/usermodel");

//const bcrypt = require("bcrypt");

const registercontroller = async(req,res) => {
    Users.create(req.body)
    .then(User => res.json(User))
    .catch(err => res.json(err))
};

module.exports = {registercontroller};