const mongoose = require('mongoose');
const bookingSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    bookingItems: [
        {
            services: { type: mongoose.Schema.Types.ObjectId, ref:'Service', required: true},
            bookingDate: { type: String , required: true},
            basePrice: { type: Number, required: true}
        }
    ]
}, {timestamps: true});
module.exports = mongoose.model('Booking',bookingSchema);