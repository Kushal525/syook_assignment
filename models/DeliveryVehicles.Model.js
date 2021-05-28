const mongoose = require('mongoose')

const DeliveryVehiclesSchema = new mongoose.Schema({
    registrationNumber: {
        unique:true,
        type: String,
        required: true,
        trim: true
    },
    vehicleType: {
        type : String,
        enum : ['bike','truck'],
        default : 'bike'
    },
    city: {
        type: String,
        trim: true,
        required : true
    },
    activeOrdersCount: {
        type : Number,
        default : 0
    }

})

const ordersSchema = new mongoose.Schema({
    orderNumber: {
        unique : true,
        type : Number,
        required: true,
        trim: true
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'items'
      },
    price: {
        type: Number,
        required: true
      },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers'
      },
    deliveryVehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'deliveryVehicles',
        required : true
      },
    isDelivered:{
        type : Boolean,
        default : false
    }

})

const DeliveryVehicles= mongoose.model('DeliveryVehicles', DeliveryVehiclesSchema)

module.exports = DeliveryVehicles;