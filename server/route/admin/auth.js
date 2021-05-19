const express = require("express");
const { signup, signin } = require("../../controller/admin/auth");
const { adminMiddleWare } = require("../../middleware/requirelogin");
const { registerValidator, resultValidator, loginValidator } = require("../../validator/auth");
const router = express.Router();
// const requirelogin = require("../middleware/requirelogin");

router.post("/admin/signup",registerValidator, resultValidator, signup);

router.post("/admin/signin",loginValidator, resultValidator, signin);



module.exports = router;