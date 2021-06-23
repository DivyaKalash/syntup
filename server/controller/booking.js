const Booking = require('../models/booking');
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
                        return res.status(200).json({booking});
                 }
                });
            }
       });
       
   }