const express = require("express");
const { signup, signin, signout } = require("../../controller/admin/auth");
const { adminMiddleWare, requireSignin } = require("../../middleware/requirelogin");
const { registerValidator, resultValidator, loginValidator } = require("../../validator/auth");
const router = express.Router();

router.post("/admin/signup",registerValidator,resultValidator, signup);

router.post("/admin/signin",loginValidator, resultValidator, signin);

router.post("/admin/signout", signout);



module.exports = router;