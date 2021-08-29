const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const shortid = require("shortid");
const { addService, getServicesBySlug, getSpecificService, getAllServices } = require("../controller/services");
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
router.get("/services/getAllService", getAllServices);
router.get("/services/:slug", getServicesBySlug);
router.get("/service/category/:slug",getSpecificService);


module.exports = router;