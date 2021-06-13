const express = require("express");
const { initialData } = require("../../controller/admin/initial");
const router = express.Router();

router.post("/initialData",initialData);

module.exports=router;