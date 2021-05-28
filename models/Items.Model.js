const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true,
        }

})

const Items = mongoose.model('Items', itemsSchema)

module.exports = Items;
