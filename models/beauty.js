const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: String,
    rating: String
})


const beautiesSchema = new Schema ({
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

module.exports = mongoose.model('Beautie', beautiesSchema)