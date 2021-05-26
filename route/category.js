const express = require('express');
const { addCategory, getCategory } = require('../controller/category');
const {  adminMiddleWare, requireSignin } = require('../middleware/requirelogin');
//const { requirelogin } = require('../middleware/requirelogin');
const router = express.Router();


router.post('/category/create', requireSignin, adminMiddleWare, addCategory);
router.get('/category/getcategory', getCategory);


module.exports = router;