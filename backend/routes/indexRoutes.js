const express = require("express");
const { indexController } = require("../controller/indexController");

//router object
const router = express.Router();

//routes
router.get('/', indexController);

//export
module.exports = router;