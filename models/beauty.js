const mongoose = require('mongoose')
const Schema = mongoose.Schema


const beautySchema = new Schema ({
    product: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }, 

    location: {
        type: String 
        
    }, 
}, {timestamps: true})

module.exports = mongoose.model('Beauty', beautySchema)