const mongoose = require('mongoose')
const Schema = mongoose.Schema


const beautySchema = new Schema ({
    brandName: {
        type: String,
        required: true,
    }, 

    productName: {
        type: String,
        required: true,
    }, 

    category: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
    }, 

    location: String 
    
}, {timestamps: true})

module.exports = mongoose.model('Beauty', beautySchema)