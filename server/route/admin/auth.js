const express = require("express");
const { signup, signin } = require("../../controller/admin/auth");
const { adminMiddleWare } = require("../../middleware/requirelogin");
const router = express.Router();
// const requirelogin = require("../middleware/requirelogin");

router.post("/admin/signup", signup);

router.post("/admin/signin", signin);



module.exports = router;