const express = require('express');
const { addCategory, getCategory } = require('../controller/category');
const {  adminMiddleWare, requireSignin } = require('../middleware/requirelogin');
//const { requirelogin } = require('../middleware/requirelogin');
const router = express.Router();
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname)
    }
  })

  const upload = multer({storage});
router.post('/category/create', requireSignin, adminMiddleWare, upload.single("categoryImage"), addCategory);
router.get('/category/getcategory', getCategory);


module.exports = router;