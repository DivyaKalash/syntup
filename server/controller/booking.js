const Booking = require('../models/booking');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your Gmail id',
    pass: 'your Gmail Password'
  }
});
const mailSender = (mailId, service, bookingDate)=> {
    var mailOptions = {
        from: 'dk7488114934@gmail.com',
        to: mailId,
        subject: 'Booking Confirmed',
        html: `<h1>Booking Confirmed!</h1><br><p>Congratulations! Your booking of ${service} on ${bookingDate} is confirmed.</p><br><p>Thanks Syntup</P>`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
exports.addBooking = (req,res) => {
    
    
   Booking.findOne({user: req.user._id})
   .exec((error,booking)=> {
       if(error) return res.status(400).json({error});
       if(booking){
           const services = req.body.bookingItems.services;
           const bookingDate = req.body.bookingItems.bookingDate;
           const item = booking.bookingItems.find(c => c.services == services && c.bookingDate === bookingDate);
          let updateItem,condition;
        //   const sameItem = booking.bookingItems.find(c => c.services == services);
           if(item){
            
              return res.status(400).json({error: " cannot be booked on this day"});
            }
            // if(sameItem){
            //  condition = {
            //      "user": req.user._id,
            //      "bookingItems": services
            
            //  };
            //  updateItem = {
            //      "$set":{
            //          "bookingItems.$": {
            //              ...req.body.bookingItems,
            //              bookingDate: req.body.bookingItems.bookingDate
                         
                     
            //      }}
            //  }
            // }

              
                  condition = {
                      "user": req.user._id
                  };
                  updateItem = {
                      "$push": {
                          "bookingItems": req.body.bookingItems
                      }
                  }
              
               
              Booking.findOneAndUpdate(condition,updateItem)
              .exec((error,data) => {
                  if(error) return res.status(400).json({error});
                  if(data)
                  {
                      console.log(data);
                    mailSender(req.user.email, services, bookingDate)
                    return res.status(200).json({data})
                  }
              });

           }
            else{
                const booking = new Booking({
                    user: req.user._id,
                bookingItems:[ req.body.bookingItems]
                });
                booking.save((error,booking) => {
                    if(error) return res.status(400).json({error});
                    if(booking){
                        mailSender(req.user.email, booking.bookingItems.services, booking.bookingItems.bookingDate)
                        return res.status(200).json({booking});
                 }
                });
            }
       });
       
   }

exports.showBookingDetailsUser = (req, res) => {
    Booking.findOne({user: req.user._id})
    .exec((error, booking)=>{
        if(error) return res.status(400).json({error});
        if(booking){
            return res.status(200).json({userBooking: booking});
        }
        else{
            res.status(400).json({msg: "Something went wrong"});
        }
    })
}

const allBookings = (bookings) => {
    let bookingList = [];
    for(let booking of bookings){
        for(let j of booking.bookingItems ){
            bookingList.push({
                "user": booking.user,
                "services": j.services,
                "bookingDate": j.bookingDate
            })
        }
    }
    return bookingList;
}

exports.showAllBookingAdmin = (req, res) => {
    Booking.find()
    .exec((error, booking) => {
        if(error) return res.status(400).json({error});
        if(booking){
            return res.status(200).json({bookings: allBookings(booking)});
        }
    })
}