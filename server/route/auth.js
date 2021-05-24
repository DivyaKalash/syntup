const express = require("express");
const router = express.Router();
const requirelogin = require("../middleware/requirelogin");
const { signup, signin } = require("../controller/auth");

router.post("/signup", signup);

router.post("/signin", signin);



module.exports = router;
