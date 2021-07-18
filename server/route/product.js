const express = require('express');
// const { addCategory, getCategory, updateCategory, deleteCategory } = require('../controller/category');
const {  adminMiddleWare, requireSignin } = require('../middleware/requirelogin');
const { createProduct } = require('../controller/product');

const multer = require("multer");
const shortid = require("shortid");
const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname)
    }
  })

const upload = multer({storage});

router.post('/product/create', requireSignin, adminMiddleWare, upload.array('productPictures'), createProduct);
// router.post('/product/create', requireSignin, adminMiddleWare, createProduct);
// router.get('/category/getcategory', getCategory);
// router.post('/category/update', upload.array('categoryImage'), updateCategory);
// router.post('/category/delete', deleteCategory);


module.exports = router;