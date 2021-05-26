const express = require("express");
const { signup, signin } = require("../../controller/admin/auth");
const { adminMiddleWare } = require("../../middleware/requirelogin");
const { registerValidator, resultValidator } = require("../../validator/auth");
const router = express.Router();

router.post("/admin/signup",registerValidator,resultValidator, signup);

router.post("/admin/signin",registerValidator, resultValidator, signin);



module.exports = router;