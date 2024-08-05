const express = require("express")
const {route} = require("./testroutes1")
const {registercontroller} = require("../controller/authcontroller")

const router = express.Router()

router.post('/register',registercontroller);
module.export = router
