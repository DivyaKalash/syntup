const express = require('express');
const { addBooking, showBookingDetailsUser, showAllBookingAdmin } = require('../controller/booking');
const { requireSignin, userMiddleWare, adminMiddleWare } = require('../middleware/requirelogin');


const router = express.Router();


router.post('/booking/addBooking', requireSignin, userMiddleWare, addBooking);
router.get("/booking/getUserBookingDetails", requireSignin, userMiddleWare, showBookingDetailsUser);
router.get("/booking/getAllBookings", requireSignin, adminMiddleWare, showAllBookingAdmin);



module.exports = router;