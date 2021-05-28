const mongoose = require('mongoose');
const items = require('./Items.Model');
const deliveryVehicles = require('./DeliveryVehicles.Model');
const customers = require('./Customer.Model');

const ordersSchema = new mongoose.Schema({
    orderNumber: {
        unique : true,
        type : Number,
        required: true,
        trim: true
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: items
      },
    price: {
        type: Number,
        required: true
      },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: customers
      },
    deliveryVehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: deliveryVehicles,
        required : true
      },
    isDelivered:{
        type : Boolean,
        default : false
    }

})

const Orders= mongoose.model('Orders', ordersSchema)

module.exports = Orders;