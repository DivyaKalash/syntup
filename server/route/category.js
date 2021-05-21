const express = require('express');
const { addCategory, getCategory } = require('../controller/category');
const { requiresignin, adminMiddleWare } = require('../middleware/requirelogin');
//const { requirelogin } = require('../middleware/requirelogin');
const router = express.Router();


router.post('/category/create', requiresignin, adminMiddleWare, addCategory);
router.get('/category/getcategory', getCategory);


module.exports = router;