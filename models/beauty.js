const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5}
    }, {timestamps: true
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

    image: String,

    price: {
        type: Number,
        required: true,
    }, 

    location: String,

    note: [ noteSchema ]
    
}, {timestamps: true})

module.exports = mongoose.model('Beautie', beautiesSchema)