const mongoose = require('mongoose');
const bookingSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    bookingItems: [
        {
            services: { type: String, required: true},
            bookingDate: { type: String , required: true},
            address: {type: String, required: true}
            // basePrice: { type: Number, required: true}
        }
    ]
}, {timestamps: true});
module.exports = mongoose.model('Booking',bookingSchema);