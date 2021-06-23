const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const shortid = require("shortid");
const { addService } = require("../controller/services");
const { adminMiddleWare, requireSignin } = require("../middleware/requirelogin");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + file.originalname );
    }
  });

  var upload = multer({ storage });


router.post("/service/create",requireSignin,adminMiddleWare, upload.array("servicePictures"), addService );

module.exports = router;