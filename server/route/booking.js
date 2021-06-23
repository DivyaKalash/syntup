const express = require('express');
const { addBooking } = require('../controller/booking');
const { requireSignin, userMiddleWare } = require('../middleware/requirelogin');


const router = express.Router();


router.post('/booking/addBooking',requireSignin,userMiddleWare,addBooking);



module.exports = router;