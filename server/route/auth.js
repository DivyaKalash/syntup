const express = require("express");
const router = express.Router();
const requirelogin = require("../middleware/requirelogin");
const { signup, signin } = require("../controller/auth");
const { registerValidator, loginValidator, resultValidator } = require("../validator/auth");


router.post("/signup",registerValidator, resultValidator, signup);

router.post("/signin",loginValidator,resultValidator, signin);



module.exports = router;
